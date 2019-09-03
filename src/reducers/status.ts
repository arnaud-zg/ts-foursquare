import { createReducer } from 'typesafe-actions'
import { NStatus } from '../../types/status'
import { TRootAction, EVenuesAction } from '../actions'

export const initialState: NStatus.IState = {}

export const statusReducer = createReducer<NStatus.IState, TRootAction>(
  initialState
)
  .handleAction(
    [EVenuesAction.GET_VENUES_SEARCH_REQUEST],
    (state, action: TRootAction): NStatus.IState => ({
      ...state,
      [action.type]: {
        ...state[action.type],
        hasError: false,
        isLoading: true,
      },
    })
  )
  .handleAction(
    [EVenuesAction.GET_VENUES_SEARCH_FAILURE],
    (state, action: TRootAction): NStatus.IState => ({
      ...state,
      [action.type]: {
        ...state[action.type],
        hasError: true,
        isLoading: false,
      },
    })
  )
  .handleAction(
    [
      EVenuesAction.GET_VENUES_SEARCH_CANCEL,
      EVenuesAction.GET_VENUES_SEARCH_SUCCESS,
    ],
    (state, action: TRootAction): NStatus.IState => ({
      ...state,
      [action.type]: {
        ...state[action.type],
        hasError: false,
        isLoading: false,
      },
    })
  )
