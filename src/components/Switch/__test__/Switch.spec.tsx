import React from 'react'

import { render } from '@test/test-utils'

import { Switch, SwitchProps } from '../Switch'

const setup = (overrides: SwitchProps) => render(<Switch {...overrides} />)

describe('Switch', () => {
  it('rendering icons when checked', () => {
    const { getByTestId } = setup({
      checked: true,
    })

    expect(getByTestId('test-icon-checked'))
  })

  it('rendering icons when unchecked', () => {
    const { getByTestId } = setup({
      checked: false,
    })

    expect(getByTestId('test-icon-unchecked'))
  })
})
