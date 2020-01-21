import { NStore, NStatusState } from '../../types'

export const statusSelector = (state: NStore.IState) => state.status

export const statusModuleStateSelector = (
  state: NStore.IState,
  moduleKey: string
): NStatusState.IModuleState =>
  statusSelector(state)[moduleKey] || {
    hasError: false,
    isLoading: false,
  }
