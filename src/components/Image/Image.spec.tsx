import { render } from '@testing-library/react-native'
import React from 'react'

import { Image } from './Image'

describe('Image', () => {
  it('renders correctly', () => {
    const rendered = render(<Image />)
    expect(rendered).toBeTruthy()
  })
})
