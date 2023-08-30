import React from 'react'

import { render } from '@test/test-utils'

import { Button } from '../Header'

describe('Button', () => {
  it('renders correctly', () => {
    const rendered = render(<Button />)
    expect(rendered).toBeTruthy()
  })
})
