import { createReducer } from 'typesafe-actions'
import { NVenues } from '../../types/venues'
import { EVenuesAction, TVenuesAction } from '../actions/venues'

export const initialState: NVenues.IVenuesState = {
  venues: {},
}

export const venuesReducer = createReducer<NVenues.IVenuesState, TVenuesAction>(
  initialState,
  {
    [EVenuesAction.RESOLVE_GET_VENUES_SEARCH]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  }
)
