import { createReducer } from 'typesafe-actions'
import { NVenuesState } from '../../types'
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
  TVenuesAction,
} from '../actions/venues'
import { getVenuesListedGroupKey } from '../utils/venue'

export const initialState: NVenuesState.IState = {
  categories: {},
  entities: {},
  likesEntities: {},
  miniVenues: {},
  nextVenues: {},
  recommendedPlaces: {},
  similarVenues: {},
  trendingEntities: {},
  venuesListed: {},
}

export const venuesReducer = createReducer<NVenuesState.IState, TVenuesAction>(
  initialState
)
  .handleAction(
    getVenuesCategoriesAsync.success,
    (state, action): NVenuesState.IState => {
      const categories = action.payload.reduce(
        (acc, cur) => ({ ...acc, [cur.id]: cur }),
        {}
      )

      return {
        ...state,
        categories: {
          ...categories,
        },
      }
    }
  )
  .handleAction(
    getVenuesNextVenuesAsync.success,
    (state, action): NVenuesState.IState => {
      const venues = action.payload.reduce(
        (acc, cur) => ({ ...acc, [cur.id]: cur }),
        {}
      )

      return {
        ...state,
        nextVenues: {
          ...venues,
        },
      }
    }
  )
  .handleAction(
    getVenuesSimilarAsync.success,
    (state, action): NVenuesState.IState => {
      const venues = action.payload.reduce(
        (acc, cur) => ({ ...acc, [cur.id]: cur }),
        {}
      )

      return {
        ...state,
        similarVenues: {
          ...venues,
        },
      }
    }
  )
  .handleAction(
    getVenuesSearchAsync.success,
    (state, action): NVenuesState.IState => {
      const venues = action.payload.reduce(
        (acc, cur) => ({ ...acc, [cur.id]: cur }),
        {}
      )

      return {
        ...state,
        entities: {
          ...venues,
        },
      }
    }
  )
  .handleAction(
    getVenuesExploreAsync.success,
    (state, action): NVenuesState.IState => {
      const recommendedPlaces = action.payload.reduce(
        (acc, cur) => ({ ...acc, [cur.venue.id]: cur }),
        {}
      )

      return {
        ...state,
        recommendedPlaces: {
          ...recommendedPlaces,
        },
      }
    }
  )
  .handleAction(getVenuesLikesAsync.success, (state, action) => {
    const likesEntities = action.payload.items.reduce(
      (acc, cur) => ({ ...acc, [cur.id]: cur }),
      {}
    )

    return {
      ...state,
      likesEntities: {
        ...likesEntities,
      },
    }
  })
  .handleAction(getVenuesListedAsync.success, (state, action) => {
    const groupEntities = action.payload.groups.reduce(
      (acc, cur) => ({ ...acc, [getVenuesListedGroupKey(cur)]: cur }),
      {}
    )

    return {
      ...state,
      venuesListed: {
        ...groupEntities,
      },
    }
  })
  .handleAction(
    getVenuesSuggestCompletionAsync.success,
    (state, action): NVenuesState.IState => {
      const miniVenues = action.payload.reduce(
        (acc, cur) => ({ ...acc, [cur.id]: cur }),
        {}
      )

      return {
        ...state,
        miniVenues: {
          ...miniVenues,
        },
      }
    }
  )
  .handleAction(
    getVenuesTrendingAsync.success,
    (state, action): NVenuesState.IState => {
      const venues = action.payload.reduce(
        (acc, cur) => ({ ...acc, [cur.id]: cur }),
        {}
      )

      return {
        ...state,
        trendingEntities: {
          ...venues,
        },
      }
    }
  )
