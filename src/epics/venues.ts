import { Epic } from 'redux-observable'
import { of } from 'rxjs/internal/observable/of'
import { catchError, filter, map, switchMap, takeUntil } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { NStore } from '../../types/store'
import { TRootAction } from '../actions'
import {
  getVenuesCategoriesAsync,
  getVenuesExploreAsync,
  getVenuesLikesAsync,
  getVenuesNextVenuesAsync,
  getVenuesSearchAsync,
  getVenuesSimilarAsync,
  getVenuesSuggestCompletionAsync,
  getVenuesTrendingAsync,
} from '../actions/venues'
import {
  adaptGetVenuesCategories,
  adaptGetVenuesExplore,
  adaptGetVenuesLikes,
  adaptGetVenuesNextVenues,
  adaptGetVenuesSearch,
  adaptGetVenuesSimilar,
  adaptGetVenuesSuggestCompletion,
  adaptGetVenuesTrending,
} from '../adapter/venues'
import {
  getObservableVenuesCategories,
  getObservableVenuesExplore,
  getObservableVenuesLikes,
  getObservableVenuesNextVenues,
  getObservableVenuesSearch,
  getObservableVenuesSimilar,
  getObservableVenuesSuggestCompletion,
  getObservableVenuesTrending,
} from '../services/venues'

export const getVenuesCategoriesEpic: Epic<
  TRootAction,
  TRootAction,
  NStore.IState
> = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(getVenuesCategoriesAsync.request)),
    switchMap(() =>
      getObservableVenuesCategories({ state$ }).pipe(
        map(adaptGetVenuesCategories),
        map(getVenuesCategoriesAsync.success),
        catchError(err => of(getVenuesCategoriesAsync.failure(err))),
        takeUntil(
          action$.pipe(filter(isActionOf(getVenuesCategoriesAsync.cancel)))
        )
      )
    )
  )

export const getVenuesExploreEpic: Epic<
  TRootAction,
  TRootAction,
  NStore.IState
> = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(getVenuesExploreAsync.request)),
    switchMap(action =>
      getObservableVenuesExplore({ action, state$ }).pipe(
        map(adaptGetVenuesExplore),
        map(getVenuesExploreAsync.success),
        catchError(err => of(getVenuesExploreAsync.failure(err))),
        takeUntil(
          action$.pipe(filter(isActionOf(getVenuesExploreAsync.cancel)))
        )
      )
    )
  )

export const getVenuesLikesEpic: Epic<
  TRootAction,
  TRootAction,
  NStore.IState
> = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(getVenuesLikesAsync.request)),
    switchMap(action =>
      getObservableVenuesLikes({ action, state$ }).pipe(
        map(adaptGetVenuesLikes),
        map(getVenuesLikesAsync.success),
        catchError(err => of(getVenuesLikesAsync.failure(err))),
        takeUntil(action$.pipe(filter(isActionOf(getVenuesLikesAsync.cancel))))
      )
    )
  )

export const getVenuesNextVenuesEpic: Epic<
  TRootAction,
  TRootAction,
  NStore.IState
> = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(getVenuesNextVenuesAsync.request)),
    switchMap(action =>
      getObservableVenuesNextVenues({ action, state$ }).pipe(
        map(adaptGetVenuesNextVenues),
        map(getVenuesNextVenuesAsync.success),
        catchError(err => of(getVenuesNextVenuesAsync.failure(err))),
        takeUntil(
          action$.pipe(filter(isActionOf(getVenuesNextVenuesAsync.cancel)))
        )
      )
    )
  )

export const getVenuesSearchEpic: Epic<
  TRootAction,
  TRootAction,
  NStore.IState
> = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(getVenuesSearchAsync.request)),
    switchMap(action =>
      getObservableVenuesSearch({ action, state$ }).pipe(
        map(adaptGetVenuesSearch),
        map(getVenuesSearchAsync.success),
        catchError(err => of(getVenuesSearchAsync.failure(err))),
        takeUntil(action$.pipe(filter(isActionOf(getVenuesSearchAsync.cancel))))
      )
    )
  )

export const getVenuesSimilarEpic: Epic<
  TRootAction,
  TRootAction,
  NStore.IState
> = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(getVenuesSimilarAsync.request)),
    switchMap(action =>
      getObservableVenuesSimilar({ action, state$ }).pipe(
        map(adaptGetVenuesSimilar),
        map(getVenuesSimilarAsync.success),
        catchError(err => of(getVenuesSimilarAsync.failure(err))),
        takeUntil(
          action$.pipe(filter(isActionOf(getVenuesSimilarAsync.cancel)))
        )
      )
    )
  )

export const getVenuesTrendingEpic: Epic<
  TRootAction,
  TRootAction,
  NStore.IState
> = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(getVenuesTrendingAsync.request)),
    switchMap(action =>
      getObservableVenuesTrending({ action, state$ }).pipe(
        map(adaptGetVenuesTrending),
        map(getVenuesTrendingAsync.success),
        catchError(err => of(getVenuesTrendingAsync.failure(err))),
        takeUntil(
          action$.pipe(filter(isActionOf(getVenuesTrendingAsync.cancel)))
        )
      )
    )
  )

export const getVenuesSuggestCompletionEpic: Epic<
  TRootAction,
  TRootAction,
  NStore.IState
> = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(getVenuesSuggestCompletionAsync.request)),
    switchMap(action =>
      getObservableVenuesSuggestCompletion({ action, state$ }).pipe(
        map(adaptGetVenuesSuggestCompletion),
        map(getVenuesSuggestCompletionAsync.success),
        catchError(err => of(getVenuesSuggestCompletionAsync.failure(err))),
        takeUntil(
          action$.pipe(
            filter(isActionOf(getVenuesSuggestCompletionAsync.cancel))
          )
        )
      )
    )
  )
