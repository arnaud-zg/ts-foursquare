import { ActionType, createAsyncAction } from 'typesafe-actions'
import {
  NLikes,
  NMiniVenue,
  NRecommendedPlaces,
  NRequest,
  NVenue,
  NVenuesCategories,
} from '../../types'

export const getVenuesCategoriesAsync = createAsyncAction(
  'GET_VENUES_CATEGORIES_REQUEST',
  'GET_VENUES_CATEGORIES_SUCCESS',
  'GET_VENUES_CATEGORIES_FAILURE',
  'GET_VENUES_CATEGORIES_CANCEL'
)<void, NVenuesCategories.ICategory[], Error, string>()

export const getVenuesExploreAsync = createAsyncAction(
  'GET_VENUES_EXPLORE_REQUEST',
  'GET_VENUES_EXPLORE_SUCCESS',
  'GET_VENUES_EXPLORE_FAILURE',
  'GET_VENUES_EXPLORE_CANCEL'
)<
  NRequest.TVenuesExplorePayload,
  NRecommendedPlaces.IGroupItem[],
  Error,
  string
>()

export const getVenuesLikesAsync = createAsyncAction(
  'GET_VENUES_LIKES_REQUEST',
  'GET_VENUES_LIKES_SUCCESS',
  'GET_VENUES_LIKES_FAILURE',
  'GET_VENUES_LIKES_CANCEL'
)<NRequest.IVenuesLikesPayload, NLikes.ILikes, Error, string>()

export const getVenuesNextVenuesAsync = createAsyncAction(
  'GET_VENUES_NEXT_VENUES_REQUEST',
  'GET_VENUES_NEXT_VENUES_SUCCESS',
  'GET_VENUES_NEXT_VENUES_FAILURE',
  'GET_VENUES_NEXT_VENUES_CANCEL'
)<NRequest.IVenuesNextVenuesPayload, NVenue.IVenue[], Error, string>()

export const getVenuesSearchAsync = createAsyncAction(
  'GET_VENUES_SEARCH_REQUEST',
  'GET_VENUES_SEARCH_SUCCESS',
  'GET_VENUES_SEARCH_FAILURE',
  'GET_VENUES_SEARCH_CANCEL'
)<NRequest.TVenuesSearchPayload, NVenue.IVenue[], Error, string>()

export const getVenuesSimilarAsync = createAsyncAction(
  'GET_VENUES_SIMILAR_REQUEST',
  'GET_VENUES_SIMILAR_SUCCESS',
  'GET_VENUES_SIMILAR_FAILURE',
  'GET_VENUES_SIMILAR_CANCEL'
)<NRequest.IVenuesSimilarPayload, NVenue.IVenue[], Error, string>()

export const getVenuesTrendingAsync = createAsyncAction(
  'GET_VENUES_TRENDING_REQUEST',
  'GET_VENUES_TRENDING_SUCCESS',
  'GET_VENUES_TRENDING_FAILURE',
  'GET_VENUES_TRENDING_CANCEL'
)<NRequest.TVenuesTrendingPayload, NVenue.IVenue[], Error, string>()

export const getVenuesSuggestCompletionAsync = createAsyncAction(
  'GET_VENUES_SUGGEST_COMPLETION_REQUEST',
  'GET_VENUES_SUGGEST_COMPLETION_SUCCESS',
  'GET_VENUES_SUGGEST_COMPLETION_FAILURE',
  'GET_VENUES_SUGGEST_COMPLETION_CANCEL'
)<
  NRequest.TVenuesSuggestCompletionPayload,
  NMiniVenue.IMiniVenue[],
  Error,
  string
>()

export const venuesActions = {
  getVenuesCategoriesAsync,
  getVenuesExploreAsync,
  getVenuesLikesAsync,
  getVenuesNextVenuesAsync,
  getVenuesSearchAsync,
  getVenuesSimilarAsync,
  getVenuesSuggestCompletionAsync,
  getVenuesTrendingAsync,
}

export type TVenuesAction = ActionType<typeof venuesActions>
