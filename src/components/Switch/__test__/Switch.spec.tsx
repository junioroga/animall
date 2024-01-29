import React from 'react'

import { render } from '~/test/test-utils'

import { Switch } from '../Switch'

describe('Switch', () => {
  it('renders correctly', () => {
    const rendered = render(<Switch />)
    expect(rendered).toBeTruthy()
  })
})
