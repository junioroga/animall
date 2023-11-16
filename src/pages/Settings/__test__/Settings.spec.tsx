import { mocked } from 'jest-mock'

import { Store } from '@store/index'
import { act, fireEvent, render } from '@test/test-utils'

import { Settings } from '../Settings'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: jest.fn(),
    i18n: {
      changeLanguage: jest.fn(() => Promise.resolve({ data: {} })),
    },
  }),
}))

jest.mock('@store', () => ({
  ...jest.requireActual('@store'),
  Store: {
    settings: {
      theme: {
        get: jest.fn(() => 'light'),
        set: jest.fn((theme: string) => theme),
      },
      lang: {
        get: jest.fn(() => 'pt-BR'),
        set: jest.fn((lang: string) => lang),
      },
    },
  },
}))

describe('Settings', () => {
  const setup = () => {
    return render(<Settings />)
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('render screen correctly', () => {
    const rendered = setup()

    expect(rendered).toBeTruthy()
  })

  it('press switch to change theme to dark', () => {
    const { getByTestId } = setup()
    const switchComponent = getByTestId('switch-theme')

    act(() => {
      fireEvent(switchComponent, 'onCheckedChange')
    })
    expect(switchComponent.props.accessibilityState).toHaveProperty(
      'checked',
      false,
    )
  })

  it('press switch to change language to pt-BR', () => {
    const { getByTestId } = setup()
    const switchComponent = getByTestId('switch-language')

    act(() => {
      fireEvent(switchComponent, 'onCheckedChange')
    })

    expect(switchComponent.props.accessibilityState).toHaveProperty(
      'checked',
      true,
    )
  })

  it('press switch to change theme to light', () => {
    mocked(Store.settings.theme.get).mockReturnValueOnce('dark')
    const { getByTestId } = setup()
    const switchComponent = getByTestId('switch-theme')

    act(() => {
      fireEvent(switchComponent, 'onCheckedChange')
    })
    expect(switchComponent.props.accessibilityState).toHaveProperty(
      'checked',
      false,
    )
  })

  it('press switch to change language to en-US', () => {
    mocked(Store.settings.lang.get).mockReturnValueOnce('en-US')
    const { getByTestId } = setup()
    const switchComponent = getByTestId('switch-language')

    act(() => {
      fireEvent(switchComponent, 'onCheckedChange')
    })
    expect(switchComponent.props.accessibilityState).toHaveProperty(
      'checked',
      false,
    )
  })
})
