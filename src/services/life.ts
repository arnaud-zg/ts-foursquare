import { StateObservable } from 'redux-observable'
import { fromFetch } from 'rxjs/fetch'
import { catchError, switchMap } from 'rxjs/operators'
import { NAction, NStore } from '../../types'
import {
  EAuthApiDefaultParameters,
  EAuthApiPathnames,
  EGrantType,
} from '../constants/api'
import { getLocationHref } from '../utils'
import { processFetchError, processFetchResponse } from './fetch'
import { lifeCredentialsSelector } from '../DEPRECATED_selectors'

export const getObservableAccessToken = ({
  action,
  state$,
}: {
  action: NAction.IAction
  state$: StateObservable<NStore.IState>
}) => {
  const { clientId, clientSecret, redirectUri } = lifeCredentialsSelector(
    state$.value
  )

  return fromFetch(
    getLocationHref({
      origin: EAuthApiDefaultParameters.ORIGIN,
      pathname: EAuthApiPathnames.ACCESS_TOKEN,
      param: {
        ...action.payload,
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: EGrantType.AUTHORIZATION_CODE,
        redirect_uri: redirectUri,
      },
    })
  ).pipe(switchMap(processFetchResponse), catchError(processFetchError))
}
