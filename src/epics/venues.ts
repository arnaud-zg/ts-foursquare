import { Epic } from 'redux-observable'
import { of } from 'rxjs/internal/observable/of'
import { catchError, filter, map, switchMap, takeUntil } from 'rxjs/operators'
import { isOfType } from 'typesafe-actions'
import { NRoot } from '../../types/root.d'
import { TRootAction } from '../actions'
import { EVenuesAction, getVenuesSearchAsync } from '../actions/venues'
import { adaptGetVenuesSearch } from '../adapter/venues'
import { getObservableVenuesSearch } from '../services/venues'

export const getVenuesSearchEpic: Epic<
  TRootAction,
  TRootAction,
  NRoot.IState
> = (action$, state$) =>
  action$.pipe(
    filter(isOfType(EVenuesAction.GET_VENUES_SEARCH_REQUEST)),
    switchMap(action =>
      getObservableVenuesSearch(action, state$).pipe(
        map(adaptGetVenuesSearch),
        map(getVenuesSearchAsync.success),
        catchError(err => of(getVenuesSearchAsync.failure(err))),
        takeUntil(
          action$.pipe(filter(isOfType(EVenuesAction.GET_VENUES_SEARCH_CANCEL)))
        )
      )
    )
  )
