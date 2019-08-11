import { Observable, of } from 'rxjs'
import { fromFetch } from 'rxjs/fetch'
import { catchError, switchMap } from 'rxjs/operators'
import { NAction } from '../../types/action.d'
import { EApiDefaultParameters, EApiPathnames } from '../constants/api'
import { getCredentials } from '../utils/storage'
import { getLocationHref } from '../utils/url'

export const processFetchResponse = (
  response: Response
):
  | Promise<any>
  | Observable<{
      error: boolean
      message: string
    }> => {
  if (response.ok) {
    return response.json()
  }

  return of({ error: true, message: `Error ${response.status}` })
}

export const processFetchError = (
  err: Error
): Observable<{
  error: boolean
  message: string
}> => of({ error: true, message: err.message })

export const getObservableVenuesSearch = (action: NAction.IAction) => {
  const { payload } = action
  const { name } = payload
  const { clientId, clientSecret } = getCredentials()

  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: EApiPathnames.VENUES_SEARCH,
      param: {
        client_id: clientId,
        client_secret: clientSecret,
        intent: 'match',
        ll: '40.7099,-73.9622',
        name: name,
        v: EApiDefaultParameters.VERSION,
      },
    })
  ).pipe(
    switchMap(processFetchResponse),
    catchError(processFetchError)
  )
}
