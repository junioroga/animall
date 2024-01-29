import React from 'react'

import { Button } from 'tamagui'

import { fireEvent, render } from '~/test/test-utils'

import { Header, HeaderProps } from '../Header'

jest.mock('@/store', () => ({
  Store: {
    settings: {
      theme: {
        get: jest.fn(),
      },
    },
  },
}))

describe('Header', () => {
  const setup = (props: HeaderProps) => {
    return render(<Header {...props} />)
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders with button on right', () => {
    const mockPress = jest.fn()

    const rendered = setup({
      right: <Button onPress={mockPress} testID="button-right" />,
    })

    const buttonRight = rendered.getByTestId('button-right')
    fireEvent.press(buttonRight)

    expect(mockPress).toHaveBeenCalledTimes(1)
    expect(buttonRight).toBeTruthy()
  })
})
