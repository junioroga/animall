import { render } from '@testing-library/react-native'
import React, { ReactElement, FC } from 'react'
import { TamaguiProvider } from 'tamagui'

import config from '../tamagui.config'

type Options = Parameters<typeof render>[1]

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => (
  <TamaguiProvider config={config}>{children}</TamaguiProvider>
)

const customRender = (ui: ReactElement, options?: Options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react-native'
export { customRender as render }
