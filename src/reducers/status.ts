import { createReducer } from 'typesafe-actions'
import { NStatus } from '../../types/statusState'
import {
  ASYNC_ACTION_NAME_MAPPING,
  EVenuesAction,
  TRootAction,
} from '../actions'

export const initialState: NStatus.IState = {}

export const statusReducer = createReducer<NStatus.IState, TRootAction>(
  initialState
)
  .handleAction(
    [EVenuesAction.GET_VENUES_SEARCH_REQUEST],
    (state, action: TRootAction): NStatus.IState => ({
      ...state,
      [ASYNC_ACTION_NAME_MAPPING[action.type]]: {
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
      [ASYNC_ACTION_NAME_MAPPING[action.type]]: {
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
      [ASYNC_ACTION_NAME_MAPPING[action.type]]: {
        ...state[action.type],
        hasError: false,
        isLoading: false,
      },
    })
  )
