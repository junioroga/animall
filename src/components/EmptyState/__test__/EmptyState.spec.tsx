import React from 'react'

import { fireEvent, render } from '~/test/test-utils'

import { EmptyState, EmptyStateProps, EmptyStateTypes } from '../EmptyState'

describe('EmptyState', () => {
  const setup = (props: EmptyStateProps) => {
    return render(<EmptyState {...props} />)
  }

  it('renders with error', () => {
    const rendered = setup({
      type: EmptyStateTypes.ERROR,
      message: 'Test error',
    })

    expect(rendered.getByText('Test error')).toBeTruthy()
  })

  it('renders with no data', () => {
    const rendered = setup({
      type: EmptyStateTypes.NO_DATA,
      message: 'Test no data',
    })

    expect(rendered.getByText('Test no data')).toBeTruthy()
  })

  it('renders with no search', () => {
    const rendered = setup({
      type: EmptyStateTypes.NO_SEARCH,
      message: 'Test no search',
    })

    expect(rendered.getByText('Test no search')).toBeTruthy()
  })

  it('renders empty state with alert', () => {
    const rendered = setup({
      alert: 'Test alert',
      type: EmptyStateTypes.NO_SEARCH,
      message: 'Test no search',
    })

    expect(rendered.getByText('Test alert')).toBeTruthy()
  })

  it('renders empty state with action', () => {
    const mockPress = jest.fn()

    const rendered = setup({
      action: 'Test action',
      onPress: mockPress,
      type: EmptyStateTypes.NO_SEARCH,
      message: 'Test no search',
    })

    const buttonAction = rendered.getByText('Test action')
    fireEvent.press(buttonAction)

    expect(mockPress).toHaveBeenCalledTimes(1)
    expect(buttonAction).toBeTruthy()
  })
})
