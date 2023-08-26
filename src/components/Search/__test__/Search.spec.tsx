import { render, fireEvent } from '@test/test-utils'
import React from 'react'

import { Search } from '../Search'

const setup = () => {
  return render(<Search />)
}

const mockNavigate = jest.fn()

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: jest.fn() }),
}))

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: mockNavigate }),
}))

describe('Search', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('when input is filled', () => {
    const { getByTestId } = setup()
    const input = getByTestId('test-input-search')

    fireEvent.changeText(input, 'Naruto')
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

    expect(mockNavigate).toHaveBeenCalledTimes(1)
    expect(mockNavigate).toHaveBeenCalledWith('ListAnime', {
      userSearch: 'Naruto',
    })
  })
})
