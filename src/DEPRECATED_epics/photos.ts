import { Epic } from 'redux-observable'
import { of } from 'rxjs/internal/observable/of'
import { catchError, filter, map, switchMap, takeUntil } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { NStore } from '../../types'
import { getPhotosDetailsAsync, TRootAction } from '../DEPRECATED_actions'
import { adaptGetPhotosDetails } from '../adapter'
import { getObservablePhotosDetails } from '../services'

export const getPhotosDetailsEpic: Epic<
  TRootAction,
  TRootAction,
  NStore.IState
> = action$ =>
  action$.pipe(
    filter(isActionOf(getPhotosDetailsAsync.request)),
    switchMap(action =>
      getObservablePhotosDetails({ action }).pipe(
        map(adaptGetPhotosDetails),
        map(getPhotosDetailsAsync.success),
        catchError(err => of(getPhotosDetailsAsync.failure(err))),
        takeUntil(
          action$.pipe(filter(isActionOf(getPhotosDetailsAsync.cancel)))
        )
      )
    )
  )
