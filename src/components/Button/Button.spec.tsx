import { render } from '@testing-library/react-native'
import React from 'react'

import { Button } from './Button'

jest.mock('tamagui', () => ({
  ...jest.requireActual('tamagui'),
  createComponent: jest.fn(() => null),
}))

describe('Button', () => {
  it('renders correctly', () => {
    const rendered = render(<Button />)
    expect(rendered).toBeTruthy()
  })
})
