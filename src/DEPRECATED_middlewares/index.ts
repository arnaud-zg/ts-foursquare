import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { NStore } from '../../types'
import { TRootAction } from '../DEPRECATED_actions'
import {
  getAccessTokenEpic,
  getPhotosDetailsEpic,
  getVenuesCategoriesEpic,
  getVenuesExploreEpic,
  getVenuesLikesEpic,
  getVenuesListedEpic,
  getVenuesNextVenuesEpic,
  getVenuesSearchEpic,
  getVenuesSimilarEpic,
  getVenuesSuggestCompletionEpic,
  getVenuesTrendingEpic,
} from '../DEPRECATED_epics'

export const rootEpic = combineEpics(
  getAccessTokenEpic,
  getPhotosDetailsEpic,
  getVenuesCategoriesEpic,
  getVenuesExploreEpic,
  getVenuesLikesEpic,
  getVenuesListedEpic,
  getVenuesNextVenuesEpic,
  getVenuesSearchEpic,
  getVenuesSimilarEpic,
  getVenuesSuggestCompletionEpic,
  getVenuesTrendingEpic
)
export const epicMiddleware = createEpicMiddleware<
  TRootAction,
  TRootAction,
  NStore.IState
>()
