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
    [
      EVenuesAction.GET_VENUES_EXPLORE_REQUEST,
      EVenuesAction.GET_VENUES_SEARCH_REQUEST,
      EVenuesAction.GET_VENUES_TRENDING_REQUEST,
    ],
    (state, action: TRootAction): NStatus.IState => ({
      ...state,
      [ASYNC_ACTION_NAME_MAPPING[action.type]]: {
        ...state[action.type],
        hasError: false,
        isCancelled: false,
        isLoading: true,
      },
    })
  )
  .handleAction(
    [
      EVenuesAction.GET_VENUES_EXPLORE_FAILURE,
      EVenuesAction.GET_VENUES_SEARCH_FAILURE,
      EVenuesAction.GET_VENUES_TRENDING_FAILURE,
    ],
    (state, action: TRootAction): NStatus.IState => ({
      ...state,
      [ASYNC_ACTION_NAME_MAPPING[action.type]]: {
        ...state[action.type],
        hasError: true,
        isCancelled: false,
        isLoading: false,
      },
    })
  )
  .handleAction(
    [
      EVenuesAction.GET_VENUES_EXPLORE_CANCEL,
      EVenuesAction.GET_VENUES_SEARCH_CANCEL,
      EVenuesAction.GET_VENUES_TRENDING_CANCEL,
    ],
    (state, action: TRootAction): NStatus.IState => ({
      ...state,
      [ASYNC_ACTION_NAME_MAPPING[action.type]]: {
        ...state[action.type],
        hasError: false,
        isCancelled: true,
        isLoading: false,
      },
    })
  )
  .handleAction(
    [
      EVenuesAction.GET_VENUES_EXPLORE_SUCCESS,
      EVenuesAction.GET_VENUES_SEARCH_SUCCESS,
      EVenuesAction.GET_VENUES_TRENDING_SUCCESS,
    ],
    (state, action: TRootAction): NStatus.IState => ({
      ...state,
      [ASYNC_ACTION_NAME_MAPPING[action.type]]: {
        ...state[action.type],
        hasError: false,
        isCancelled: false,
        isLoading: false,
      },
    })
  )
