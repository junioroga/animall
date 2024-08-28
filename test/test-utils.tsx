/* eslint-disable no-console */
import React, { FC, ReactElement } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  act,
  render,
  renderHook,
  RenderHookOptions,
  RenderHookResult,
} from '@testing-library/react-native'

import { TamaguiProvider } from 'tamagui'

import config from '../tamagui.config'

type Options = Parameters<typeof render>[1]

const queryCliente = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
  logger: {
    log: console.log,
    warn: console.warn,
    error: () => {},
  },
})

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => (
  <QueryClientProvider client={queryCliente}>
    <TamaguiProvider config={config}>{children}</TamaguiProvider>
  </QueryClientProvider>
)

const customRender = (ui: ReactElement, options?: Options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

const customRenderHook = <Result, Props>(
  renderCallback: (props: Props) => Result,
  options?: RenderHookOptions<Props>
): RenderHookResult<Result, Props> =>
  renderHook(renderCallback, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react-native'
export { customRender as render }
export { customRenderHook as renderHook }
