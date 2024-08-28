import React from 'react'

import { act, render } from '~/test/test-utils'

import { Switch } from '../Switch'

describe('Switch', () => {
  it('renders correctly', async () => {
    const rendered = render(<Switch />)

    await act(async () => {
      expect(rendered).toBeTruthy()
    })
  })
})
