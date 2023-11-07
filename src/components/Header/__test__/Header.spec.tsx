import React from 'react'

import { mocked } from 'jest-mock'

import { Button } from 'tamagui'

import { Store } from '@store'
import { fireEvent, render } from '@test/test-utils'

import { Header, HeaderProps } from '../Header'

jest.mock('@store', () => ({
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

  it('renders with default values', () => {
    mocked(Store.settings.theme.get).mockReturnValueOnce('light')
    const rendered = setup({})
    const { 'data-file-name': imageName } =
      rendered.getByTestId('image-center').props

    expect(rendered.getByTestId('header-container')).toBeTruthy()
    expect(imageName).toEqual('SvgAseprite_light')
  })

  it('renders with dark theme', () => {
    mocked(Store.settings.theme.get).mockReturnValueOnce('dark')
    const rendered = setup({})

    const { 'data-file-name': imageName } =
      rendered.getByTestId('image-center').props

    expect(imageName).toEqual('SvgAseprite_dark')
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
