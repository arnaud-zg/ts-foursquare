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
  // getVenuesExploreAsync
  GET_VENUES_EXPLORE_REQUEST = 'GET_VENUES_EXPLORE_REQUEST',
  GET_VENUES_EXPLORE_SUCCESS = 'GET_VENUES_EXPLORE_SUCCESS',
  GET_VENUES_EXPLORE_FAILURE = 'GET_VENUES_EXPLORE_FAILURE',
  GET_VENUES_EXPLORE_CANCEL = 'GET_VENUES_EXPLORE_CANCEL',
  // getVenuesTrendingAsync
  GET_VENUES_TRENDING_REQUEST = 'GET_VENUES_TRENDING_REQUEST',
  GET_VENUES_TRENDING_SUCCESS = 'GET_VENUES_TRENDING_SUCCESS',
  GET_VENUES_TRENDING_FAILURE = 'GET_VENUES_TRENDING_FAILURE',
  GET_VENUES_TRENDING_CANCEL = 'GET_VENUES_TRENDING_CANCEL',
}

export const ASYNC_ACTION_NAME_MAPPING: IAsyncActionNameMapping = {
  [EVenuesAction.GET_VENUES_SEARCH_REQUEST]: 'getVenuesSearchAsync',
  [EVenuesAction.GET_VENUES_SEARCH_SUCCESS]: 'getVenuesSearchAsync',
  [EVenuesAction.GET_VENUES_SEARCH_FAILURE]: 'getVenuesSearchAsync',
  [EVenuesAction.GET_VENUES_SEARCH_CANCEL]: 'getVenuesSearchAsync',
  [EVenuesAction.GET_VENUES_EXPLORE_REQUEST]: 'getVenuesExploreAsync',
  [EVenuesAction.GET_VENUES_EXPLORE_SUCCESS]: 'getVenuesExploreAsync',
  [EVenuesAction.GET_VENUES_EXPLORE_FAILURE]: 'getVenuesExploreAsync',
  [EVenuesAction.GET_VENUES_EXPLORE_CANCEL]: 'getVenuesExploreAsync',
}

export const getVenuesSearchAsync = createAsyncAction(
  EVenuesAction.GET_VENUES_SEARCH_REQUEST,
  EVenuesAction.GET_VENUES_SEARCH_SUCCESS,
  EVenuesAction.GET_VENUES_SEARCH_FAILURE,
  EVenuesAction.GET_VENUES_SEARCH_CANCEL
)<NRequest.TVenuesSearchPayload, NVenue.IVenue[], Error, string>()

export const getVenuesExploreAsync = createAsyncAction(
  EVenuesAction.GET_VENUES_EXPLORE_REQUEST,
  EVenuesAction.GET_VENUES_EXPLORE_SUCCESS,
  EVenuesAction.GET_VENUES_EXPLORE_FAILURE,
  EVenuesAction.GET_VENUES_EXPLORE_CANCEL
)<
  NRequest.TVenuesExplorePayload,
  NRecommendedPlaces.IGroupItem[],
  Error,
  string
>()

export const getVenuesTrendingAsync = createAsyncAction(
  EVenuesAction.GET_VENUES_TRENDING_REQUEST,
  EVenuesAction.GET_VENUES_TRENDING_SUCCESS,
  EVenuesAction.GET_VENUES_TRENDING_FAILURE,
  EVenuesAction.GET_VENUES_TRENDING_CANCEL
)<NRequest.TVenuesTrendingPayload, NVenue.IVenue[], Error, string>()

export const actions = {
  getVenuesSearchAsync,
  getVenuesExploreAsync,
  getVenuesTrendingAsync,
}

export type TVenuesAction = ActionType<typeof actions>
