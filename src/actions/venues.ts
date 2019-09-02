import { ActionType, createAsyncAction } from 'typesafe-actions'
import { NRequest } from '../../types/request.d'
import { NVenue } from '../../types/venue.d'

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
)<NRequest.TVenuesSearchPayload, NVenue.IVenue[], Error, string>()

export const actions = {
  getVenuesSearchAsync,
}

export type TVenuesAction = ActionType<typeof actions>
