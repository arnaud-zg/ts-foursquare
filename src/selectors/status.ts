import { NStore, NStatus } from '../../types'

export const statusSelector = (state: NStore.IState) => state.status

export const statusModuleStateSelector = (
  state: NStore.IState,
  moduleKey: string
): NStatus.IModuleState =>
  statusSelector(state)[moduleKey] || {
    hasError: false,
    isLoading: false,
  }
