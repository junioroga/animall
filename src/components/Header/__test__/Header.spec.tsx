import React from 'react'

import { Button } from 'tamagui'

import { act, fireEvent, render } from '~/test/test-utils'

import { Header, HeaderProps } from '../Header'

describe('Header', () => {
  const setup = (props: HeaderProps) => {
    return render(<Header {...props} />)
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders with button on right', async () => {
    const mockPress = jest.fn()

    const { getByTestId } = setup({
      right: <Button onPress={mockPress} testID="button-right" />,
    })

    const buttonRight = getByTestId('button-right')

    await act(async () => {
      fireEvent.press(buttonRight)
    })

    expect(mockPress).toHaveBeenCalledTimes(1)
    expect(buttonRight).toBeTruthy()
  })

  it('renders with title', async () => {
    const { getByText } = setup({
      title: 'Teste',
    })

    await act(async () => {
      expect(getByText('Teste'))
    })
  })
})
