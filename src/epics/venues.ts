import { Epic } from 'redux-observable'
import { filter, map, switchMap } from 'rxjs/operators'
import { isOfType } from 'typesafe-actions'
import {
  EVenuesAction,
  resolveGetVenuesSearch,
  TVenuesAction,
} from '../actions/venues'
import { adaptGetVenuesSearch } from '../adapter/venues'
import { TRootState } from '../reducers'
import { getObservableVenuesSearch } from '../services/venues'

export const getVenuesSearchEpic: Epic<
  TVenuesAction,
  TVenuesAction,
  TRootState
> = (action$, state$) =>
  action$.pipe(
    filter(isOfType(EVenuesAction.REQUEST_GET_VENUES_SEARCH)),
    switchMap(action =>
      getObservableVenuesSearch(action, state$).pipe(
        map(adaptGetVenuesSearch),
        map(resolveGetVenuesSearch)
      )
    )
  )
