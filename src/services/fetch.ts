import { StateObservable } from 'redux-observable'
import { Observable } from 'rxjs/internal/Observable'
import { throwError } from 'rxjs/internal/observable/throwError'
import { NStore } from '../../types'
import { EApiDefaultParameters } from '../constants/api'
import { lifeCredentialsSelector } from '../selectors/life'

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

export const getDefaultRequestParameters = (
  state$: StateObservable<NStore.IState>
) => {
  const { clientId, clientSecret, accessToken } = lifeCredentialsSelector(
    state$.value
  )

  return accessToken
    ? {
        oauth_token: accessToken,
        v: EApiDefaultParameters.VERSION,
      }
    : {
        client_id: clientId,
        client_secret: clientSecret,
        v: EApiDefaultParameters.VERSION,
      }
}
