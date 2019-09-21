import { NStore } from '../../types/store'
import { NStatus } from '../../types/statusState'
import { TRootActionType } from '../actions'

export const statusSelector = (state: NStore.IState) => state.status

export const moduleStateSelector = (
  state: NStore.IState,
  moduleKey: TRootActionType
): NStatus.IModuleState =>
  statusSelector(state)[moduleKey] || {
    hasError: false,
    isLoading: false,
  }
