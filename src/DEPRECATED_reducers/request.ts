import { createReducer } from 'typesafe-actions'
import {
  NEntity,
  NLikes,
  NMiniVenue,
  NPhotos,
  NRecommendedPlaces,
  NRequestState,
  NVenue,
  NVenueListed,
  NVenuesCategories,
} from '../../types'
import {
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
} from '../DEPRECATED_actions'
import { ASYNC_ACTION_NAME_MAPPING } from '../constants/asyncAction'
import { getVenuesListedGroupKey } from '../utils/venue'

export const initialState: NRequestState.IState = {}

export const requestReducer = createReducer<NRequestState.IState, TRootAction>(
  initialState
)
  .handleAction(
    getPhotosDetailsAsync.success,
    (state, action): NRequestState.IState => {
      const entity: NPhotos.IPhoto = action.payload

      return {
        ...state,
        [ASYNC_ACTION_NAME_MAPPING[action.type]]: {
          entityIds: [entity.id],
        },
      }
    }
  )
  .handleAction(
    getVenuesCategoriesAsync.success,
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
    getVenuesExploreAsync.success,
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
    getVenuesLikesAsync.success,
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
    getVenuesListedAsync.success,
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
      getVenuesNextVenuesAsync.success,
      getVenuesSearchAsync.success,
      getVenuesSimilarAsync.success,
      getVenuesTrendingAsync.success,
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
    getVenuesSuggestCompletionAsync.success,
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
    (state, action): NRequestState.IState => ({
      ...state,
      [ASYNC_ACTION_NAME_MAPPING[action.type]]: {
        entityIds: [],
        error: action.payload,
      },
    })
  )
