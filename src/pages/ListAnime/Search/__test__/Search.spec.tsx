import { render, fireEvent } from '@test/test-utils'
import React from 'react'

import { Search, Props } from '../Search'

const setSearch = jest.fn()
const handleSearch = jest.fn()

const setup = (overrides?: Props) => {
  return render(
    <Search
      handleSearch={handleSearch}
      search=""
      setSearch={setSearch}
      {...overrides}
    />,
  )
}

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: jest.fn() }),
}))

describe('Search', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('when input is filled', () => {
    const { getByTestId } = setup({
      handleSearch,
      search: 'Naruto',
      setSearch,
    })
    const input = getByTestId('test-input-search')

    expect(input.props.value).toEqual('Naruto')
  })

  it('when search length is minus than three, button has disabled', () => {
    const { getByTestId } = setup()
    const button = getByTestId('test-button-search')

    fireEvent.press(button)
    expect(button.props.pointerEvents).toEqual('none')
  })

  it('enable button when has search length with more than 3 characters', () => {
    const { getByTestId } = setup()
    const input = getByTestId('test-input-search')
    const button = getByTestId('test-button-search')

    fireEvent.changeText(input, 'Naruto')
    fireEvent.press(button)

    expect(handleSearch).toHaveBeenCalledTimes(1)
  })
})
