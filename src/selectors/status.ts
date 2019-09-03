import { NRoot } from '../../types/root.d'
import { NStatus } from '../../types/status'
import { TRootActionType } from '../actions'

export const statusSelector = (state: NRoot.IState) => state.status

export const moduleStateSelector = (
  state: NRoot.IState,
  moduleKey: TRootActionType
): NStatus.IModuleState =>
  state.status[moduleKey] || {
    hasError: false,
    isLoading: false,
  }
