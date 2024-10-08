import React from 'react'

import { mocked } from 'jest-mock'

import { act, fireEvent, render } from '~/test/test-utils'

import { Search, SearchProps } from '../Search'

const mockSetSearch = jest.fn((value) => value)
const mockOnSearch = jest.fn()

const setup = (props: SearchProps) => {
  return render(<Search {...props} />)
}

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: jest.fn() }),
}))

describe('Search', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('when input is filled', async () => {
    mocked(mockSetSearch).mockImplementationOnce(() => 'Naruto')
    const { getByTestId } = setup({
      search: 'Naruto',
      setSearch: mockSetSearch,
    })

    const input = getByTestId('test-input-search')

    await act(async () => {
      fireEvent.changeText(input, 'Naruto')
    })

    expect(input.props.value).toEqual('Naruto')
    expect(mockSetSearch).toHaveBeenCalledTimes(1)
  })

  it('when search length is minus than three, button has disabled', async () => {
    const { getByTestId } = setup({
      search: 'Na',
      setSearch: mockSetSearch,
    })

    const button = getByTestId('test-button-search')

    await act(async () => {
      expect(button.props.pointerEvents).toEqual('none')
    })
  })

  it('press button when has search length with more than 3 characters', async () => {
    mocked(mockSetSearch).mockImplementationOnce(() => 'Naruto')
    const { getByTestId } = setup({
      search: 'Naruto',
      setSearch: mockSetSearch,
      onSearch: mockOnSearch,
    })
    const button = getByTestId('test-button-search')

    await act(async () => {
      fireEvent.press(button)
    })
    expect(mockOnSearch).toHaveBeenCalledTimes(1)
  })
})
