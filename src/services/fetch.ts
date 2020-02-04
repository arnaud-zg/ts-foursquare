import { Observable } from 'rxjs/internal/Observable'
import { throwError } from 'rxjs/internal/observable/throwError'
import { EApiDefaultParameters } from '../constants/api'
import { IStandaloneConfig } from '../standalone'

export const processFetchResponse = <TResponse = any>(
  response: Response
): Promise<TResponse> | Observable<Error> => {
  if (response.ok) {
    return response.json()
  }

  return throwError(new Error(`Error ${response.status}`))
}

export const processFetchError = (err: Error): Observable<Error> =>
  throwError(new Error(err.message))

export const getDefaultRequestParameters = (config: IStandaloneConfig) => {
  const { clientId, clientSecret, accessToken } = config

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
