import { createReducer } from 'typesafe-actions'
import { NVenues } from '../../types/venues.d'
import { EVenuesAction, TVenuesAction } from '../actions/venues'

export const initialState: NVenues.IState = {
  venues: [],
}

export const venuesReducer = createReducer<NVenues.IState, TVenuesAction>(
  initialState,
  {
    [EVenuesAction.RESOLVE_GET_VENUES_SEARCH]: (state, action) => ({
      ...state,
      venues: action.payload || [],
    }),
  }
)
