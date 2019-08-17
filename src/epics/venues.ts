import { Epic } from 'redux-observable'
import { filter, map, switchMap } from 'rxjs/operators'
import { isOfType } from 'typesafe-actions'
import { NRoot } from '../../types/root.d'
import { EVenuesAction, resolveGetVenuesSearch } from '../actions/venues'
import { TAction } from '../actions'
import { adaptGetVenuesSearch } from '../adapter/venues'
import { getObservableVenuesSearch } from '../services/venues'

export const getVenuesSearchEpic: Epic<TAction, TAction, NRoot.IState> = (
  action$,
  state$
) =>
  action$.pipe(
    filter(isOfType(EVenuesAction.REQUEST_GET_VENUES_SEARCH)),
    switchMap(action =>
      getObservableVenuesSearch(action, state$).pipe(
        map(adaptGetVenuesSearch),
        map(resolveGetVenuesSearch)
      )
    )
  )
