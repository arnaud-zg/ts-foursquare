import { getType } from 'typesafe-actions'
import {
  getVenuesCategoriesAsync,
  getVenuesExploreAsync,
  getVenuesLikesAsync,
  getVenuesSearchAsync,
  getVenuesTrendingAsync,
} from '../actions'

interface IAsyncActionNameMapping {
  [actionType: string]: string
}

export const ASYNC_ACTION_NAME_MAPPING: IAsyncActionNameMapping = {
  // getVenuesCategoriesAsync
  [getType(getVenuesCategoriesAsync.request)]: 'getVenuesCategoriesAsync',
  [getType(getVenuesCategoriesAsync.success)]: 'getVenuesCategoriesAsync',
  [getType(getVenuesCategoriesAsync.failure)]: 'getVenuesCategoriesAsync',
  [getType(getVenuesCategoriesAsync.cancel)]: 'getVenuesCategoriesAsync',
  // getVenuesExploreAsync
  [getType(getVenuesExploreAsync.request)]: 'getVenuesExploreAsync',
  [getType(getVenuesExploreAsync.success)]: 'getVenuesExploreAsync',
  [getType(getVenuesExploreAsync.failure)]: 'getVenuesExploreAsync',
  [getType(getVenuesExploreAsync.cancel)]: 'getVenuesExploreAsync',
  // getVenuesLikesAsync
  [getType(getVenuesLikesAsync.request)]: 'getVenuesLikesAsync',
  [getType(getVenuesLikesAsync.success)]: 'getVenuesLikesAsync',
  [getType(getVenuesLikesAsync.failure)]: 'getVenuesLikesAsync',
  [getType(getVenuesLikesAsync.cancel)]: 'getVenuesLikesAsync',
  // getVenuesSearchAsync
  [getType(getVenuesSearchAsync.request)]: 'getVenuesSearchAsync',
  [getType(getVenuesSearchAsync.success)]: 'getVenuesSearchAsync',
  [getType(getVenuesSearchAsync.failure)]: 'getVenuesSearchAsync',
  [getType(getVenuesSearchAsync.cancel)]: 'getVenuesSearchAsync',
  // getVenuesTrendingAsync
  [getType(getVenuesTrendingAsync.request)]: 'getVenuesTrendingAsync',
  [getType(getVenuesTrendingAsync.success)]: 'getVenuesTrendingAsync',
  [getType(getVenuesTrendingAsync.failure)]: 'getVenuesTrendingAsync',
  [getType(getVenuesTrendingAsync.cancel)]: 'getVenuesTrendingAsync',
}
