import { action, ActionType } from 'typesafe-actions'
import { NVenue } from '../../types/venue.d'

export enum EVenuesAction {
  REQUEST_GET_VENUES_SEARCH = 'REQUEST_GET_VENUES_SEARCH',
  RESOLVE_GET_VENUES_SEARCH = 'RESOLVE_GET_VENUES_SEARCH',
}

export const requestGetVenuesSearch = (payload = {}) =>
  action(EVenuesAction.REQUEST_GET_VENUES_SEARCH, payload)

export const resolveGetVenuesSearch = (payload: NVenue.IVenue[] = []) =>
  action(EVenuesAction.RESOLVE_GET_VENUES_SEARCH, payload)

export const actions = {
  requestGetVenuesSearch,
  resolveGetVenuesSearch,
}

export type TVenuesAction = ActionType<typeof actions>
