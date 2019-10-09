import { createReducer, getType } from 'typesafe-actions'
import { NVenues } from '../../types/venuesState'
import {
  getVenuesExploreAsync,
  getVenuesNextVenuesAsync,
  getVenuesSearchAsync,
  getVenuesSimilarAsync,
  getVenuesTrendingAsync,
  TVenuesAction,
} from '../actions/venues'

export const initialState: NVenues.IState = {
  categories: [],
  entities: {},
  nextVenues: {},
  recommendedPlaces: [],
  similarVenues: {},
  trendingEntities: {},
}

export const venuesReducer = createReducer<NVenues.IState, TVenuesAction>(
  initialState
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
      const recommendedPlaces = action.payload
      return {
        ...state,
        recommendedPlaces,
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
