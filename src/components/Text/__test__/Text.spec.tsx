import { render } from '@test/test-utils'
import React from 'react'

import { Text } from '../Text'

describe('Text', () => {
  it('renders correctly', () => {
    const rendered = render(<Text />)
    expect(rendered).toBeTruthy()
  })
})
