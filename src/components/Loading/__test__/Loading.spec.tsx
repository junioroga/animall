import { render } from '@test/test-utils'
import React from 'react'

import { Loading } from '../Loading'

describe('Loading', () => {
  it('renders correctly', () => {
    const rendered = render(<Loading />)
    expect(rendered).toBeTruthy()
  })
})
