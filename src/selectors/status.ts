import { NStore } from '../../types/store'
import { NStatus } from '../../types/statusState'

export const statusSelector = (state: NStore.IState) => state.status

export const moduleStateSelector = (
  state: NStore.IState,
  moduleKey: string
): NStatus.IModuleState =>
  statusSelector(state)[moduleKey] || {
    hasError: false,
    isLoading: false,
  }
