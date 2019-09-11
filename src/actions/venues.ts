import { ActionType, createAsyncAction } from 'typesafe-actions'
import { NRecommendedPlaces } from '../../types/recommendedPlaces'
import { NRequest } from '../../types/request.d'
import { NVenue } from '../../types/venue.d'

interface IAsyncActionNameMapping {
  [actionType: string]: string
}

export enum EVenuesAction {
  // getVenuesSearchAsync
  GET_VENUES_SEARCH_REQUEST = 'GET_VENUES_SEARCH_REQUEST',
  GET_VENUES_SEARCH_SUCCESS = 'GET_VENUES_SEARCH_SUCCESS',
  GET_VENUES_SEARCH_FAILURE = 'GET_VENUES_SEARCH_FAILURE',
  GET_VENUES_SEARCH_CANCEL = 'GET_VENUES_SEARCH_CANCEL',
  // getVenueExploreAsync
  GET_VENUES_EXPLORE_REQUEST = 'GET_VENUES_EXPLORE_REQUEST',
  GET_VENUES_EXPLORE_SUCCESS = 'GET_VENUES_EXPLORE_SUCCESS',
  GET_VENUES_EXPLORE_FAILURE = 'GET_VENUES_EXPLORE_FAILURE',
  GET_VENUES_EXPLORE_CANCEL = 'GET_VENUES_EXPLORE_CANCEL',
}

export const ASYNC_ACTION_NAME_MAPPING: IAsyncActionNameMapping = {
  [EVenuesAction.GET_VENUES_SEARCH_REQUEST]: 'getVenuesSearchAsync',
  [EVenuesAction.GET_VENUES_SEARCH_SUCCESS]: 'getVenuesSearchAsync',
  [EVenuesAction.GET_VENUES_SEARCH_FAILURE]: 'getVenuesSearchAsync',
  [EVenuesAction.GET_VENUES_SEARCH_CANCEL]: 'getVenuesSearchAsync',
  [EVenuesAction.GET_VENUES_EXPLORE_REQUEST]: 'getVenueExploreAsync',
  [EVenuesAction.GET_VENUES_EXPLORE_SUCCESS]: 'getVenueExploreAsync',
  [EVenuesAction.GET_VENUES_EXPLORE_FAILURE]: 'getVenueExploreAsync',
  [EVenuesAction.GET_VENUES_EXPLORE_CANCEL]: 'getVenueExploreAsync',
}

export const getVenuesSearchAsync = createAsyncAction(
  EVenuesAction.GET_VENUES_SEARCH_REQUEST,
  EVenuesAction.GET_VENUES_SEARCH_SUCCESS,
  EVenuesAction.GET_VENUES_SEARCH_FAILURE,
  EVenuesAction.GET_VENUES_SEARCH_CANCEL
)<NRequest.TVenuesSearchPayload, NVenue.IVenue[], Error, string>()

export const getVenueExploreAsync = createAsyncAction(
  EVenuesAction.GET_VENUES_EXPLORE_REQUEST,
  EVenuesAction.GET_VENUES_EXPLORE_SUCCESS,
  EVenuesAction.GET_VENUES_EXPLORE_FAILURE,
  EVenuesAction.GET_VENUES_EXPLORE_CANCEL
)<NRequest.TVenuesExplorePayload, NRecommendedPlaces.IGroup, Error, string>()

export const actions = {
  getVenuesSearchAsync,
  getVenueExploreAsync,
}

export type TVenuesAction = ActionType<typeof actions>
