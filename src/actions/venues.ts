import { action, ActionType, createAsyncAction } from 'typesafe-actions'
import { NVenue } from '../../types/venue.d'
import { NRequest } from '../../types/request.d'

export enum EVenuesAction {
  REQUEST_GET_VENUES_SEARCH = 'REQUEST_GET_VENUES_SEARCH',
  RESOLVE_GET_VENUES_SEARCH = 'RESOLVE_GET_VENUES_SEARCH',
  // getVenuesSearchAsync
  GET_VENUES_SEARCH_REQUEST = 'GET_VENUES_SEARCH_REQUEST',
  GET_VENUES_SEARCH_SUCCESS = 'GET_VENUES_SEARCH_SUCCESS',
  GET_VENUES_SEARCH_FAILURE = 'GET_VENUES_SEARCH_FAILURE',
  GET_VENUES_SEARCH_CANCEL = 'GET_VENUES_SEARCH_CANCEL',
}

export const getVenuesSearchAsync = createAsyncAction(
  'GET_VENUES_SEARCH_REQUEST',
  'GET_VENUES_SEARCH_SUCCESS',
  'GET_VENUES_SEARCH_FAILURE',
  'GET_VENUES_SEARCH_CANCEL'
)<string, NVenue.IVenue[], Error, string>()

export const requestGetVenuesSearch = (
  payload: NRequest.TVenuesSearchPayload
) => action(EVenuesAction.REQUEST_GET_VENUES_SEARCH, payload)

export const resolveGetVenuesSearch = (payload: NVenue.IVenue[] = []) =>
  action(EVenuesAction.RESOLVE_GET_VENUES_SEARCH, payload)

export const actions = {
  requestGetVenuesSearch,
  resolveGetVenuesSearch,
  getVenuesSearchAsync,
}

export type TVenuesAction = ActionType<typeof actions>
