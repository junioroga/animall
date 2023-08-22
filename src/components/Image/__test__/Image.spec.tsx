import { render } from '@test/test-utils'
import React from 'react'

import { Image } from '../Image'

describe('Image', () => {
  it('renders correctly', () => {
    const rendered = render(<Image />, { wrapper: undefined })
    expect(rendered).toBeTruthy()
  })
})
