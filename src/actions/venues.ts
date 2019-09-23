import { ActionType, createAsyncAction, getType } from 'typesafe-actions'
import { NMiniVenue } from '../../types/miniVenue.d'
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
  // getVenuesSuggestCompletion
  GET_VENUES_SUGGEST_COMPLETION_REQUEST = 'GET_VENUES_SUGGEST_COMPLETION_REQUEST',
  GET_VENUES_SUGGEST_COMPLETION_SUCCESS = 'GET_VENUES_SUGGEST_COMPLETION_SUCCESS',
  GET_VENUES_SUGGEST_COMPLETION_FAILURE = 'GET_VENUES_SUGGEST_COMPLETION_FAILURE',
  GET_VENUES_SUGGEST_COMPLETION_CANCEL = 'GET_VENUES_SUGGEST_COMPLETION_CANCEL',
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

export const getVenuesSuggestCompletionAsync = createAsyncAction(
  EVenuesAction.GET_VENUES_SUGGEST_COMPLETION_REQUEST,
  EVenuesAction.GET_VENUES_SUGGEST_COMPLETION_SUCCESS,
  EVenuesAction.GET_VENUES_SUGGEST_COMPLETION_FAILURE,
  EVenuesAction.GET_VENUES_SUGGEST_COMPLETION_CANCEL
)<
  NRequest.TVenuesSuggestCompletionPayload,
  NMiniVenue.IMiniVenue[],
  Error,
  string
>()

export const ASYNC_ACTION_NAME_MAPPING: IAsyncActionNameMapping = {
  // getVenuesSearchAsync
  [getType(getVenuesSearchAsync.request)]: 'getVenuesSearchAsync',
  [getType(getVenuesSearchAsync.success)]: 'getVenuesSearchAsync',
  [getType(getVenuesSearchAsync.failure)]: 'getVenuesSearchAsync',
  [getType(getVenuesSearchAsync.cancel)]: 'getVenuesSearchAsync',
  // getVenuesExploreAsync
  [getType(getVenuesExploreAsync.request)]: 'getVenuesExploreAsync',
  [getType(getVenuesExploreAsync.success)]: 'getVenuesExploreAsync',
  [getType(getVenuesExploreAsync.failure)]: 'getVenuesExploreAsync',
  [getType(getVenuesExploreAsync.cancel)]: 'getVenuesExploreAsync',
  // getVenuesTrendingAsync
  [getType(getVenuesTrendingAsync.request)]: 'getVenuesTrendingAsync',
  [getType(getVenuesTrendingAsync.success)]: 'getVenuesTrendingAsync',
  [getType(getVenuesTrendingAsync.failure)]: 'getVenuesTrendingAsync',
  [getType(getVenuesTrendingAsync.cancel)]: 'getVenuesTrendingAsync',
}

const actions = {
  getVenuesExploreAsync,
  getVenuesSearchAsync,
  getVenuesSuggestCompletionAsync,
  getVenuesTrendingAsync,
}

export type TVenuesAction = ActionType<typeof actions>
