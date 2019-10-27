import { Epic } from 'redux-observable'
import { of } from 'rxjs/internal/observable/of'
import { catchError, filter, map, switchMap, takeUntil } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { NStore } from '../../types'
import { getListsAsync, TRootAction } from '../actions'
import { adaptGetLists } from '../adapter'
import { getObservableLists } from '../services'

export const getListsEpic: Epic<TRootAction, TRootAction, NStore.IState> = (
  action$,
  state$
) =>
  action$.pipe(
    filter(isActionOf(getListsAsync.request)),
    switchMap(action =>
      getObservableLists({ action, state$ }).pipe(
        map(adaptGetLists),
        map(getListsAsync.success),
        catchError(err => of(getListsAsync.failure(err))),
        takeUntil(action$.pipe(filter(isActionOf(getListsAsync.cancel))))
      )
    )
  )
