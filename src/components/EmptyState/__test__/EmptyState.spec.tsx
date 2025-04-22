import { act, fireEvent, render } from '~/test/test-utils'

import { EmptyState, EmptyStateProps, EmptyStateTypes } from '../EmptyState'

describe('EmptyState', () => {
  const setup = (props: EmptyStateProps) => {
    return render(<EmptyState {...props} />)
  }

  it('renders with error', () => {
    const { getByText } = setup({
      type: EmptyStateTypes.ERROR,
      message: 'Test error',
    })

    expect(getByText('Test error')).toBeTruthy()
  })

  it('renders with no data', () => {
    const { getByText } = setup({
      type: EmptyStateTypes.NO_DATA,
      message: 'Test no data',
    })

    expect(getByText('Test no data')).toBeTruthy()
  })

  it('renders with no search', () => {
    const { getByText } = setup({
      type: EmptyStateTypes.NO_SEARCH,
      message: 'Test no search',
    })

    expect(getByText('Test no search')).toBeTruthy()
  })

  it('renders empty state with alert', () => {
    const { getByText } = setup({
      alert: 'Test alert',
      type: EmptyStateTypes.NO_SEARCH,
      message: 'Test no search',
    })

    expect(getByText('Test alert')).toBeTruthy()
  })

  it('renders empty state with action', async () => {
    const mockPress = jest.fn()

    const { getByText } = setup({
      action: 'Test action',
      onPress: mockPress,
      type: EmptyStateTypes.NO_SEARCH,
      message: 'Test no search',
    })

    const buttonAction = getByText('Test action')

    await act(async () => {
      fireEvent.press(buttonAction)
    })

    expect(mockPress).toHaveBeenCalledTimes(1)
    expect(buttonAction).toBeTruthy()
  })
})
