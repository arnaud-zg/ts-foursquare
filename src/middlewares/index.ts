import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { TRootAction } from '../actions'
import {
  getVenuesCategoriesEpic,
  getVenuesExploreEpic,
  getVenuesLikesEpic,
  getVenuesNextVenuesEpic,
  getVenuesSearchEpic,
  getVenuesSimilarEpic,
  getVenuesSuggestCompletionEpic,
  getVenuesTrendingEpic,
} from '../epics'

export const rootEpic = combineEpics(
  getVenuesCategoriesEpic,
  getVenuesExploreEpic,
  getVenuesLikesEpic,
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
