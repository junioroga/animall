import { render } from '@test/test-utils'
import React from 'react'

import { Input } from '../Input'

describe('Input', () => {
  it('renders correctly', () => {
    const rendered = render(<Input />)
    expect(rendered).toBeTruthy()
  })
})
