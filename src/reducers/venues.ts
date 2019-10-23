import { createReducer, getType } from 'typesafe-actions'
import { NVenues } from '../../types'
import {
  getVenuesCategoriesAsync,
  getVenuesExploreAsync,
  getVenuesLikesAsync,
  getVenuesNextVenuesAsync,
  getVenuesSearchAsync,
  getVenuesSimilarAsync,
  getVenuesSuggestCompletionAsync,
  getVenuesTrendingAsync,
  TVenuesAction,
} from '../actions/venues'

export const initialState: NVenues.IState = {
  categories: {},
  entities: {},
  likesEntities: {},
  miniVenues: {},
  nextVenues: {},
  recommendedPlaces: {},
  similarVenues: {},
  trendingEntities: {},
}

export const venuesReducer = createReducer<NVenues.IState, TVenuesAction>(
  initialState
)
  .handleAction(
    getType(getVenuesCategoriesAsync.success),
    (state, action): NVenues.IState => {
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
    (state, action): NVenues.IState => {
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
    (state, action): NVenues.IState => {
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
    (state, action): NVenues.IState => {
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
    (state, action): NVenues.IState => {
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
  .handleAction(
    getType(getVenuesSuggestCompletionAsync.success),
    (state, action): NVenues.IState => {
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
    (state, action): NVenues.IState => {
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
