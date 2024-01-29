import React from 'react'

import { render } from '~/test/test-utils'

import { Text } from '../Text'

describe('Text', () => {
  it('renders correctly', () => {
    const rendered = render(<Text />)
    expect(rendered).toBeTruthy()
  })
})
