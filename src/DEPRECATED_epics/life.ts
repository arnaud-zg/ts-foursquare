import { Epic } from 'redux-observable'
import { of } from 'rxjs/internal/observable/of'
import { catchError, filter, map, switchMap, takeUntil } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { NStore } from '../../types'
import { getAccessTokenAsync, TRootAction } from '../DEPRECATED_actions'
import { adaptGetAccessToken } from '../adapter'
import { getObservableAccessToken } from '../services'

export const getAccessTokenEpic: Epic<
  TRootAction,
  TRootAction,
  NStore.IState
> = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(getAccessTokenAsync.request)),
    switchMap(action =>
      getObservableAccessToken({ action, state$ }).pipe(
        map(adaptGetAccessToken),
        map(getAccessTokenAsync.success),
        catchError(err => of(getAccessTokenAsync.failure(err))),
        takeUntil(action$.pipe(filter(isActionOf(getAccessTokenAsync.cancel))))
      )
    )
  )
