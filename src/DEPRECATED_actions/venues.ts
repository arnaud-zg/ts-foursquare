import { ActionType, createAsyncAction } from 'typesafe-actions'
import { NRequest } from '../../types'
import {
  adaptGetVenuesCategories,
  adaptGetVenuesExplore,
  adaptGetVenuesLikes,
  adaptGetVenuesListed,
  adaptGetVenuesNextVenues,
  adaptGetVenuesSearch,
  adaptGetVenuesSimilar,
  adaptGetVenuesSuggestCompletion,
  adaptGetVenuesTrending,
} from '../adapter/venues'

export const getVenuesCategoriesAsync = createAsyncAction(
  'GET_VENUES_CATEGORIES_REQUEST',
  'GET_VENUES_CATEGORIES_SUCCESS',
  'GET_VENUES_CATEGORIES_FAILURE',
  'GET_VENUES_CATEGORIES_CANCEL'
)<void, ReturnType<typeof adaptGetVenuesCategories>, Error, string>()

export const getVenuesExploreAsync = createAsyncAction(
  'GET_VENUES_EXPLORE_REQUEST',
  'GET_VENUES_EXPLORE_SUCCESS',
  'GET_VENUES_EXPLORE_FAILURE',
  'GET_VENUES_EXPLORE_CANCEL'
)<
  NRequest.TVenuesExplorePayload,
  ReturnType<typeof adaptGetVenuesExplore>,
  Error,
  string
>()

export const getVenuesLikesAsync = createAsyncAction(
  'GET_VENUES_LIKES_REQUEST',
  'GET_VENUES_LIKES_SUCCESS',
  'GET_VENUES_LIKES_FAILURE',
  'GET_VENUES_LIKES_CANCEL'
)<
  NRequest.IVenuesLikesPayload,
  ReturnType<typeof adaptGetVenuesLikes>,
  Error,
  string
>()

export const getVenuesListedAsync = createAsyncAction(
  'GET_VENUES_LISTED_REQUEST',
  'GET_VENUES_LISTED_SUCCESS',
  'GET_VENUES_LISTED_FAILURE',
  'GET_VENUES_LISTED_CANCEL'
)<
  NRequest.IVenuesListedPayload,
  ReturnType<typeof adaptGetVenuesListed>,
  Error,
  string
>()

export const getVenuesNextVenuesAsync = createAsyncAction(
  'GET_VENUES_NEXT_VENUES_REQUEST',
  'GET_VENUES_NEXT_VENUES_SUCCESS',
  'GET_VENUES_NEXT_VENUES_FAILURE',
  'GET_VENUES_NEXT_VENUES_CANCEL'
)<
  NRequest.IVenuesNextVenuesPayload,
  ReturnType<typeof adaptGetVenuesNextVenues>,
  Error,
  string
>()

export const getVenuesSearchAsync = createAsyncAction(
  'GET_VENUES_SEARCH_REQUEST',
  'GET_VENUES_SEARCH_SUCCESS',
  'GET_VENUES_SEARCH_FAILURE',
  'GET_VENUES_SEARCH_CANCEL'
)<
  NRequest.TVenuesSearchPayload,
  ReturnType<typeof adaptGetVenuesSearch>,
  Error,
  string
>()

export const getVenuesSimilarAsync = createAsyncAction(
  'GET_VENUES_SIMILAR_REQUEST',
  'GET_VENUES_SIMILAR_SUCCESS',
  'GET_VENUES_SIMILAR_FAILURE',
  'GET_VENUES_SIMILAR_CANCEL'
)<
  NRequest.IVenuesSimilarPayload,
  ReturnType<typeof adaptGetVenuesSimilar>,
  Error,
  string
>()

export const getVenuesSuggestCompletionAsync = createAsyncAction(
  'GET_VENUES_SUGGEST_COMPLETION_REQUEST',
  'GET_VENUES_SUGGEST_COMPLETION_SUCCESS',
  'GET_VENUES_SUGGEST_COMPLETION_FAILURE',
  'GET_VENUES_SUGGEST_COMPLETION_CANCEL'
)<
  NRequest.TVenuesSuggestCompletionPayload,
  ReturnType<typeof adaptGetVenuesSuggestCompletion>,
  Error,
  string
>()

export const getVenuesTrendingAsync = createAsyncAction(
  'GET_VENUES_TRENDING_REQUEST',
  'GET_VENUES_TRENDING_SUCCESS',
  'GET_VENUES_TRENDING_FAILURE',
  'GET_VENUES_TRENDING_CANCEL'
)<
  NRequest.TVenuesTrendingPayload,
  ReturnType<typeof adaptGetVenuesTrending>,
  Error,
  string
>()

export const venuesActions = {
  getVenuesCategoriesAsync,
  getVenuesExploreAsync,
  getVenuesLikesAsync,
  getVenuesListedAsync,
  getVenuesNextVenuesAsync,
  getVenuesSearchAsync,
  getVenuesSimilarAsync,
  getVenuesSuggestCompletionAsync,
  getVenuesTrendingAsync,
}

export type TVenuesAction = ActionType<typeof venuesActions>
