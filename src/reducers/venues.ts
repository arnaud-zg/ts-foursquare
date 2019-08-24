import { createReducer } from 'typesafe-actions'
import { NVenues } from '../../types/venues.d'
import { EVenuesAction, TVenuesAction } from '../actions/venues'

export const initialState: NVenues.IState = {
  entities: {},
}

export const venuesReducer = createReducer<NVenues.IState, TVenuesAction>(
  initialState,
  {
    [EVenuesAction.RESOLVE_GET_VENUES_SEARCH]: (
      state,
      action
    ): NVenues.IState => {
      const venues = action.payload.reduce(
        (acc, cur) => ({
          ...acc,
          [cur.id]: cur,
        }),
        {}
      )

      return {
        ...state,
        entities: {
          ...venues,
        },
      }
    },
  }
)
