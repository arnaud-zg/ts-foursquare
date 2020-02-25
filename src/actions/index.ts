import { getLists } from './lists'
import { getPhotosDetails } from './photos'
import {
  getVenuesCategories,
  getVenuesExplore,
  getVenuesLikes,
  getVenuesListed,
  getVenuesNextVenues,
  getVenuesSearch,
  getVenuesSimilar,
  getVenuesSuggestCompletion,
  getVenuesTrending,
} from './venues'

export const actions = {
  getLists,
  getPhotosDetails,
  getVenuesCategories,
  getVenuesExplore,
  getVenuesLikes,
  getVenuesListed,
  getVenuesNextVenues,
  getVenuesSearch,
  getVenuesSimilar,
  getVenuesSuggestCompletion,
  getVenuesTrending,
}

export type TActions = typeof actions
export type TActionsKey = keyof typeof actions
export type TActionsValue = TActions[keyof TActions]
