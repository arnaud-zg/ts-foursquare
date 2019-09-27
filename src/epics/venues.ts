import { Epic } from 'redux-observable'
import { of } from 'rxjs/internal/observable/of'
import { catchError, filter, map, switchMap, takeUntil } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { NStore } from '../../types/store'
import { TRootAction } from '../actions'
import {
  getVenuesExploreAsync,
  getVenuesSearchAsync,
  getVenuesSuggestCompletionAsync,
  getVenuesTrendingAsync,
} from '../actions/venues'
import {
  adaptGetVenuesExplore,
  adaptGetVenuesSearch,
  adaptGetVenuesSuggestCompletion,
  adaptGetVenuesTrending,
} from '../adapter/venues'
import {
  getObservableVenuesExplore,
  getObservableVenuesSearch,
  getObservableVenuesSuggestCompletion,
  getObservableVenuesTrending,
} from '../services/venues'

export const getVenuesSearchEpic: Epic<
  TRootAction,
  TRootAction,
  NStore.IState
> = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(getVenuesSearchAsync.request)),
    switchMap(action =>
      getObservableVenuesSearch(action, state$).pipe(
        map(adaptGetVenuesSearch),
        map(getVenuesSearchAsync.success),
        catchError(err => of(getVenuesSearchAsync.failure(err))),
        takeUntil(action$.pipe(filter(isActionOf(getVenuesSearchAsync.cancel))))
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
      getObservableVenuesExplore(action, state$).pipe(
        map(adaptGetVenuesExplore),
        map(getVenuesExploreAsync.success),
        catchError(err => of(getVenuesSearchAsync.failure(err))),
        takeUntil(
          action$.pipe(filter(isActionOf(getVenuesExploreAsync.cancel)))
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
      getObservableVenuesSuggestCompletion(action, state$).pipe(
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

export const getVenuesTrendingEpic: Epic<
  TRootAction,
  TRootAction,
  NStore.IState
> = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(getVenuesTrendingAsync.request)),
    switchMap(action =>
      getObservableVenuesTrending(action, state$).pipe(
        map(adaptGetVenuesTrending),
        map(getVenuesTrendingAsync.success),
        catchError(err => of(getVenuesTrendingAsync.failure(err))),
        takeUntil(
          action$.pipe(filter(isActionOf(getVenuesTrendingAsync.cancel)))
        )
      )
    )
  )
