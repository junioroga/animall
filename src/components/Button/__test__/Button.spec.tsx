import { render } from '@test/test-utils'
import React from 'react'

import { Button } from '../Button'

describe('Button', () => {
  it('renders correctly', () => {
    const rendered = render(<Button />)
    expect(rendered).toBeTruthy()
  })
})
