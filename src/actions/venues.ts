import { ActionType, createAsyncAction } from 'typesafe-actions'
import { NRequest } from '../../types/request.d'
import { NVenue } from '../../types/venue.d'

interface IAsyncActionNameMapping {
  [actionType: string]: string
}

export enum EVenuesAction {
  GET_VENUES_SEARCH_REQUEST = 'GET_VENUES_SEARCH_REQUEST',
  GET_VENUES_SEARCH_SUCCESS = 'GET_VENUES_SEARCH_SUCCESS',
  GET_VENUES_SEARCH_FAILURE = 'GET_VENUES_SEARCH_FAILURE',
  GET_VENUES_SEARCH_CANCEL = 'GET_VENUES_SEARCH_CANCEL',
}

export const ASYNC_ACTION_NAME_MAPPING: IAsyncActionNameMapping = {
  [EVenuesAction.GET_VENUES_SEARCH_REQUEST]: 'getVenuesSearchAsync',
  [EVenuesAction.GET_VENUES_SEARCH_SUCCESS]: 'getVenuesSearchAsync',
  [EVenuesAction.GET_VENUES_SEARCH_FAILURE]: 'getVenuesSearchAsync',
  [EVenuesAction.GET_VENUES_SEARCH_CANCEL]: 'getVenuesSearchAsync',
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
