import { NAction } from '../../types/action'
import { NVenues } from '../../types/venues'
import { EActionRequest } from 'actions/venues'

export const initialState: NVenues.IVenues = {}

export const venuesReducer = (action: NAction.IAction) => {
  switch (action.type) {
    case EActionRequest.GET_VENUES_SEARCH:
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
