import { createReducer } from 'typesafe-actions'
import { NStatusState } from '../../types'
import {
  getAccessTokenAsync,
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

export const initialState: NStatusState.IState = {}

export const statusReducer = createReducer<NStatusState.IState, TRootAction>(
  initialState
)
  .handleAction(
    [
      getAccessTokenAsync.request,
      getListsAsync.request,
      getPhotosDetailsAsync.request,
      getVenuesCategoriesAsync.request,
      getVenuesExploreAsync.request,
      getVenuesLikesAsync.request,
      getVenuesListedAsync.request,
      getVenuesNextVenuesAsync.request,
      getVenuesSearchAsync.request,
      getVenuesSimilarAsync.request,
      getVenuesSuggestCompletionAsync.request,
      getVenuesTrendingAsync.request,
    ],
    (state, action: TRootAction): NStatusState.IState => ({
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
      getAccessTokenAsync.failure,
      getListsAsync.failure,
      getPhotosDetailsAsync.failure,
      getVenuesCategoriesAsync.failure,
      getVenuesExploreAsync.failure,
      getVenuesLikesAsync.failure,
      getVenuesListedAsync.failure,
      getVenuesNextVenuesAsync.failure,
      getVenuesSearchAsync.failure,
      getVenuesSimilarAsync.failure,
      getVenuesSuggestCompletionAsync.failure,
      getVenuesTrendingAsync.failure,
    ],
    (state, action: TRootAction): NStatusState.IState => ({
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
      getAccessTokenAsync.cancel,
      getListsAsync.cancel,
      getPhotosDetailsAsync.cancel,
      getVenuesCategoriesAsync.cancel,
      getVenuesExploreAsync.cancel,
      getVenuesLikesAsync.cancel,
      getVenuesListedAsync.cancel,
      getVenuesNextVenuesAsync.cancel,
      getVenuesSearchAsync.cancel,
      getVenuesSimilarAsync.cancel,
      getVenuesSuggestCompletionAsync.cancel,
      getVenuesTrendingAsync.cancel,
    ],
    (state, action: TRootAction): NStatusState.IState => ({
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
      getAccessTokenAsync.success,
      getListsAsync.success,
      getPhotosDetailsAsync.success,
      getVenuesCategoriesAsync.success,
      getVenuesExploreAsync.success,
      getVenuesLikesAsync.success,
      getVenuesListedAsync.success,
      getVenuesNextVenuesAsync.success,
      getVenuesSearchAsync.success,
      getVenuesSimilarAsync.success,
      getVenuesSuggestCompletionAsync.success,
      getVenuesTrendingAsync.success,
    ],
    (state, action: TRootAction): NStatusState.IState => ({
      ...state,
      [ASYNC_ACTION_NAME_MAPPING[action.type]]: {
        ...state[action.type],
        hasError: false,
        isCancelled: false,
        isLoading: false,
      },
    })
  )
