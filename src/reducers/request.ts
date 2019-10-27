import { createReducer, getType } from 'typesafe-actions'
import {
  NEntity,
  NLikes,
  NMiniVenue,
  NRecommendedPlaces,
  NRequestState,
  NVenue,
  NVenueListed,
  NVenuesCategories,
} from '../../types'
import { TRootAction } from '../actions'
import {
  getVenuesCategoriesAsync,
  getVenuesExploreAsync,
  getVenuesLikesAsync,
  getVenuesListedAsync,
  getVenuesNextVenuesAsync,
  getVenuesSearchAsync,
  getVenuesSimilarAsync,
  getVenuesSuggestCompletionAsync,
  getVenuesTrendingAsync,
} from '../actions/venues'
import { ASYNC_ACTION_NAME_MAPPING } from '../constants/asyncAction'
import { getVenuesListedGroupKey } from '../utils/venue'

export const initialState: NRequestState.IState = {}

export const requestReducer = createReducer<NRequestState.IState, TRootAction>(
  initialState
)
  .handleAction(
    getType(getVenuesCategoriesAsync.success),
    (state, action): NRequestState.IState => {
      const entityIds = action.payload.map(
        (item: NVenuesCategories.ICategory) => item.id
      )

      return {
        ...state,
        [ASYNC_ACTION_NAME_MAPPING[action.type]]: {
          entityIds,
        },
      }
    }
  )
  .handleAction(
    getType(getVenuesExploreAsync.success),
    (state, action): NRequestState.IState => {
      const entityIds = action.payload.map(
        (item: NRecommendedPlaces.IGroupItem) => item.venue.id
      )

      return {
        ...state,
        [ASYNC_ACTION_NAME_MAPPING[action.type]]: {
          entityIds,
        },
      }
    }
  )
  .handleAction(
    getType(getVenuesLikesAsync.success),
    (state, action): NRequestState.IState => {
      const entityIds = action.payload.items.map(
        (item: NLikes.IItem) => item.id
      )

      return {
        ...state,
        [ASYNC_ACTION_NAME_MAPPING[action.type]]: {
          entityIds,
        },
      }
    }
  )

  .handleAction(
    getType(getVenuesListedAsync.success),
    (state, action): NRequestState.IState => {
      const entityIds = action.payload.groups.map(
        (group: NEntity.IEntityGroup<NVenueListed.IGroupItem>) =>
          getVenuesListedGroupKey(group)
      )

      return {
        ...state,
        [ASYNC_ACTION_NAME_MAPPING[action.type]]: {
          entityIds,
        },
      }
    }
  )

  .handleAction(
    [
      getType(getVenuesNextVenuesAsync.success),
      getType(getVenuesSearchAsync.success),
      getType(getVenuesSimilarAsync.success),
      getType(getVenuesTrendingAsync.success),
    ],
    (state, action): NRequestState.IState => {
      const entityIds = action.payload.map((item: NVenue.IVenue) => item.id)

      return {
        ...state,
        [ASYNC_ACTION_NAME_MAPPING[action.type]]: {
          entityIds,
        },
      }
    }
  )
  .handleAction(
    getType(getVenuesSuggestCompletionAsync.success),
    (state, action): NRequestState.IState => {
      const entityIds = action.payload.map(
        (item: NMiniVenue.IMiniVenue) => item.id
      )

      return {
        ...state,
        [ASYNC_ACTION_NAME_MAPPING[action.type]]: {
          entityIds,
        },
      }
    }
  )
  .handleAction(
    [
      getType(getVenuesCategoriesAsync.cancel),
      getType(getVenuesExploreAsync.cancel),
      getType(getVenuesLikesAsync.cancel),
      getType(getVenuesNextVenuesAsync.cancel),
      getType(getVenuesSearchAsync.cancel),
      getType(getVenuesSimilarAsync.cancel),
      getType(getVenuesSuggestCompletionAsync.cancel),
      getType(getVenuesTrendingAsync.cancel),
      getType(getVenuesListedAsync.cancel),
    ],
    (state, action): NRequestState.IState => ({
      ...state,
      [ASYNC_ACTION_NAME_MAPPING[action.type]]: {
        cancelReason: action.payload,
        entityIds: [],
      },
    })
  )
  .handleAction(
    [
      getType(getVenuesCategoriesAsync.failure),
      getType(getVenuesExploreAsync.failure),
      getType(getVenuesLikesAsync.failure),
      getType(getVenuesNextVenuesAsync.failure),
      getType(getVenuesSearchAsync.failure),
      getType(getVenuesSimilarAsync.failure),
      getType(getVenuesSuggestCompletionAsync.failure),
      getType(getVenuesTrendingAsync.failure),
      getType(getVenuesListedAsync.failure),
    ],
    (state, action): NRequestState.IState => ({
      ...state,
      [ASYNC_ACTION_NAME_MAPPING[action.type]]: {
        entityIds: [],
        error: action.payload,
      },
    })
  )
