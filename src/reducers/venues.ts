import { createReducer, getType } from 'typesafe-actions'
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
    getType(getVenuesCategoriesAsync.success),
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
    getType(getVenuesNextVenuesAsync.success),
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
    getType(getVenuesSimilarAsync.success),
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
    getType(getVenuesSearchAsync.success),
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
    getType(getVenuesExploreAsync.success),
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
  .handleAction(getType(getVenuesLikesAsync.success), (state, action) => {
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
  .handleAction(getType(getVenuesListedAsync.success), (state, action) => {
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
    getType(getVenuesSuggestCompletionAsync.success),
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
    getType(getVenuesTrendingAsync.success),
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
