import { Observable, of } from 'rxjs'
import { fromFetch } from 'rxjs/fetch'
import { catchError, switchMap } from 'rxjs/operators'
import { NAction } from '../../types/action'
import { EApiDefaultParameters } from '../constants/api'
import { getCredentials } from '../utils/storage'

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

export const getObservableVenuesSearch = ({
  actionPayload,
}: {
  actionPayload: NAction.IActionPayload
}): Observable<Response> => {
  const { name } = actionPayload
  const { clientId, clientSecret } = getCredentials()

  return fromFetch(
    `https://api.foursquare.com/v2/venues/search?client_id=${clientId}&client_secret=${clientSecret}&v=${EApiDefaultParameters.VERSION}&ll=40.7099,-73.9622&name=${name}&intent=match`
  ).pipe(
    switchMap(processFetchResponse),
    catchError(processFetchError)
  )
}
