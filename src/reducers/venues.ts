import { createReducer } from 'typesafe-actions'
import { NVenues } from '../../types/venuesState'
import { EVenuesAction, TVenuesAction } from '../actions/venues'

export const initialState: NVenues.IState = {
  entities: {},
  recommendedPlaces: [],
}

export const venuesReducer = createReducer<NVenues.IState, TVenuesAction>(
  initialState,
  {
    [EVenuesAction.GET_VENUES_SEARCH_SUCCESS]: (
      state,
      action
    ): NVenues.IState => {
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
    },
    [EVenuesAction.GET_VENUES_EXPLORE_SUCCESS]: (
      state,
      action
    ): NVenues.IState => {
      const recommendedPlaces = action.payload
      return {
        ...state,
        recommendedPlaces,
      }
    },
  }
)
