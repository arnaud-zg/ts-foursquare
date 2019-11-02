import { createReducer, getType } from 'typesafe-actions'
import { NStatus } from '../../types'
import {
  getListsAsync,
  getPhotosDetailsAsync,
  getVenuesCategoriesAsync,
  getVenuesExploreAsync,
  getVenuesLikesAsync,
  getVenuesListedAsync,
  getVenuesNextVenuesAsync,
  getVenuesSearchAsync,
  getVenuesSimilarAsync,
  getVenuesSuggestCompletionAsync,
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
      getType(getPhotosDetailsAsync.request),
      getType(getVenuesCategoriesAsync.request),
      getType(getVenuesExploreAsync.request),
      getType(getVenuesLikesAsync.request),
      getType(getVenuesListedAsync.request),
      getType(getVenuesNextVenuesAsync.request),
      getType(getVenuesSearchAsync.request),
      getType(getVenuesSimilarAsync.request),
      getType(getVenuesSuggestCompletionAsync.request),
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
      getType(getPhotosDetailsAsync.failure),
      getType(getVenuesCategoriesAsync.failure),
      getType(getVenuesExploreAsync.failure),
      getType(getVenuesLikesAsync.failure),
      getType(getVenuesListedAsync.failure),
      getType(getVenuesNextVenuesAsync.failure),
      getType(getVenuesSearchAsync.failure),
      getType(getVenuesSimilarAsync.failure),
      getType(getVenuesSuggestCompletionAsync.failure),
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
      getType(getPhotosDetailsAsync.cancel),
      getType(getVenuesCategoriesAsync.cancel),
      getType(getVenuesExploreAsync.cancel),
      getType(getVenuesLikesAsync.cancel),
      getType(getVenuesListedAsync.cancel),
      getType(getVenuesNextVenuesAsync.cancel),
      getType(getVenuesSearchAsync.cancel),
      getType(getVenuesSimilarAsync.cancel),
      getType(getVenuesSuggestCompletionAsync.cancel),
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
      getType(getPhotosDetailsAsync.success),
      getType(getVenuesCategoriesAsync.success),
      getType(getVenuesExploreAsync.success),
      getType(getVenuesLikesAsync.success),
      getType(getVenuesListedAsync.success),
      getType(getVenuesNextVenuesAsync.success),
      getType(getVenuesSearchAsync.success),
      getType(getVenuesSimilarAsync.success),
      getType(getVenuesSuggestCompletionAsync.success),
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
