import { createReducer, getType } from 'typesafe-actions'
import { NVenues } from '../../types/venuesState'
import {
  getVenuesExploreAsync,
  getVenuesSearchAsync,
  getVenuesTrendingAsync,
  TVenuesAction,
} from '../actions/venues'

export const initialState: NVenues.IState = {
  entities: {},
  recommendedPlaces: [],
  trendingEntities: {},
}

export const venuesReducer = createReducer<NVenues.IState, TVenuesAction>(
  initialState
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
