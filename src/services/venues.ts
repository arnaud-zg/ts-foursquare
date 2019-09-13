import { StateObservable } from 'redux-observable'
import { fromFetch } from 'rxjs/fetch'
import { Observable } from 'rxjs/internal/Observable'
import { throwError } from 'rxjs/internal/observable/throwError'
import { catchError, switchMap } from 'rxjs/operators'
import { NAction } from '../../types/action.d'
import { NStore } from '../../types/store'
import { EApiDefaultParameters, EApiPathnames } from '../constants/api'
import { credentialsSelector } from '../selectors/life'
import { getLocationHref } from '../utils/url'

export const processFetchResponse = (
  response: Response
): Promise<any> | Observable<Error> => {
  if (response.ok) {
    return response.json()
  }

  return throwError(new Error(`Error ${response.status}`))
}

export const processFetchError = (err: Error): Observable<Error> =>
  throwError(new Error(err.message))

export const getObservableVenuesSearch = (
  action: NAction.IAction,
  state$: StateObservable<NStore.IState>
) => {
  const { clientId, clientSecret } = credentialsSelector(state$.value)

  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: EApiPathnames.VENUES_SEARCH,
      param: {
        ...action.payload,
        client_id: clientId,
        client_secret: clientSecret,
        v: EApiDefaultParameters.VERSION,
      },
    })
  ).pipe(
    switchMap(processFetchResponse),
    catchError(processFetchError)
  )
}

export const getObservableVenuesExplore = (
  action: NAction.IAction,
  state$: StateObservable<NStore.IState>
) => {
  const { clientId, clientSecret } = credentialsSelector(state$.value)

  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: EApiPathnames.VENUES_EXPLORE,
      param: {
        ...action.payload,
        client_id: clientId,
        client_secret: clientSecret,
        v: EApiDefaultParameters.VERSION,
      },
    })
  ).pipe(
    switchMap(processFetchResponse),
    catchError(processFetchError)
  )
}
