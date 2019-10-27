import { createReducer, getType } from 'typesafe-actions'
import { NStatus } from '../../types'
import {
  getListsAsync,
  getVenuesExploreAsync,
  getVenuesListedAsync,
  getVenuesSearchAsync,
  getVenuesTrendingAsync,
  TRootAction,
} from '../actions'
import { ASYNC_ACTION_NAME_MAPPING } from '../constants/asyncAction'

export const initialState: NStatus.IState = {}

export const statusReducer = createReducer<NStatus.IState, TRootAction>(
  initialState
)
  .handleAction(
    [
      getType(getListsAsync.request),
      getType(getVenuesExploreAsync.request),
      getType(getVenuesListedAsync.request),
      getType(getVenuesSearchAsync.request),
      getType(getVenuesTrendingAsync.request),
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
      getType(getListsAsync.failure),
      getType(getVenuesExploreAsync.failure),
      getType(getVenuesListedAsync.failure),
      getType(getVenuesSearchAsync.failure),
      getType(getVenuesTrendingAsync.failure),
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
      getType(getListsAsync.cancel),
      getType(getVenuesExploreAsync.cancel),
      getType(getVenuesListedAsync.cancel),
      getType(getVenuesSearchAsync.cancel),
      getType(getVenuesTrendingAsync.cancel),
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
      getType(getListsAsync.success),
      getType(getVenuesExploreAsync.success),
      getType(getVenuesListedAsync.success),
      getType(getVenuesSearchAsync.success),
      getType(getVenuesTrendingAsync.success),
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
