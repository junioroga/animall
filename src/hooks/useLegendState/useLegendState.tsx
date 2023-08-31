import { observable } from '@legendapp/state'
import { useObservable } from '@legendapp/state/react'

const testeObs = observable()

type SetState = typeof testeObs.set

export function useLegendState<T>(initialState: T): [T, SetState] {
  const valueObs = useObservable(initialState)

  const [state, setState] = [valueObs.get(), valueObs.set]

  return [state, setState]
}
