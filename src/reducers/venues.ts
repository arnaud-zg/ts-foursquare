import { NAction } from '../../types/action'
import { NVenues } from '../../types/venues'
import { EVenuesActionRequest } from '../actions/venues'

export const initialState: NVenues.IVenues = {}

export const venuesReducer = (action: NAction.IAction) => {
  switch (action.type) {
    case EVenuesActionRequest.GET_VENUES_SEARCH:
      return {
        ...initialState,
        ...action.payload,
      }

    default:
      return {
        ...initialState,
      }
  }
}
