import { getType } from 'typesafe-actions'
import {
  getVenuesCategoriesAsync,
  getVenuesExploreAsync,
  getVenuesLikesAsync,
  getVenuesListedAsync,
  getVenuesNextVenuesAsync,
  getVenuesSearchAsync,
  getVenuesSimilarAsync,
  getVenuesSuggestCompletionAsync,
  getVenuesTrendingAsync,
} from '../DEPRECATED_actions'

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
  // getVenuesListedAsync
  [getType(getVenuesListedAsync.request)]: 'getVenuesListedAsync',
  [getType(getVenuesListedAsync.success)]: 'getVenuesListedAsync',
  [getType(getVenuesListedAsync.failure)]: 'getVenuesListedAsync',
  [getType(getVenuesListedAsync.cancel)]: 'getVenuesListedAsync',
  // getVenuesNextVenuesAsync
  [getType(getVenuesNextVenuesAsync.request)]: 'getVenuesNextVenuesAsync',
  [getType(getVenuesNextVenuesAsync.success)]: 'getVenuesNextVenuesAsync',
  [getType(getVenuesNextVenuesAsync.failure)]: 'getVenuesNextVenuesAsync',
  [getType(getVenuesNextVenuesAsync.cancel)]: 'getVenuesNextVenuesAsync',
  // getVenuesSearchAsync
  [getType(getVenuesSearchAsync.request)]: 'getVenuesSearchAsync',
  [getType(getVenuesSearchAsync.success)]: 'getVenuesSearchAsync',
  [getType(getVenuesSearchAsync.failure)]: 'getVenuesSearchAsync',
  [getType(getVenuesSearchAsync.cancel)]: 'getVenuesSearchAsync',
  // getVenuesSimilarAsync
  [getType(getVenuesSimilarAsync.request)]: 'getVenuesSimilarAsync',
  [getType(getVenuesSimilarAsync.success)]: 'getVenuesSimilarAsync',
  [getType(getVenuesSimilarAsync.failure)]: 'getVenuesSimilarAsync',
  [getType(getVenuesSimilarAsync.cancel)]: 'getVenuesSimilarAsync',
  // getVenuesSuggestCompletionAsync
  [getType(
    getVenuesSuggestCompletionAsync.request
  )]: 'getVenuesSuggestCompletionAsync',
  [getType(
    getVenuesSuggestCompletionAsync.success
  )]: 'getVenuesSuggestCompletionAsync',
  [getType(
    getVenuesSuggestCompletionAsync.failure
  )]: 'getVenuesSuggestCompletionAsync',
  [getType(
    getVenuesSuggestCompletionAsync.cancel
  )]: 'getVenuesSuggestCompletionAsync',
  // getVenuesTrendingAsync
  [getType(getVenuesTrendingAsync.request)]: 'getVenuesTrendingAsync',
  [getType(getVenuesTrendingAsync.success)]: 'getVenuesTrendingAsync',
  [getType(getVenuesTrendingAsync.failure)]: 'getVenuesTrendingAsync',
  [getType(getVenuesTrendingAsync.cancel)]: 'getVenuesTrendingAsync',
}
