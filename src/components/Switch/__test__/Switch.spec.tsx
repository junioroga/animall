import { Moon, Sun } from '@tamagui/lucide-icons'
import { render } from '@test/test-utils'
import React from 'react'

import { Switch, SwitchProps } from '../Switch'

const setup = (overrides: SwitchProps) => render(<Switch {...overrides} />)

describe('Switch', () => {
  it('rendering icons when checked', () => {
    const { getByTestId } = setup({
      checked: true,
      iconChecked: <Moon size="$1" color="$blue9" testID="test-icon-checked" />,
      iconUnchecked: (
        <Sun size="$1" color="$yellow8" testID="test-icon-unchecked" />
      ),
    })

    expect(getByTestId('test-icon-checked'))
  })

  it('rendering icons when unchecked', () => {
    const { getByTestId } = setup({
      checked: false,
      iconChecked: <Moon size="$1" color="$blue9" testID="test-icon-checked" />,
      iconUnchecked: (
        <Sun size="$1" color="$yellow8" testID="test-icon-unchecked" />
      ),
    })

    expect(getByTestId('test-icon-unchecked'))
  })
})
