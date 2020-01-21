import { NStore } from '../../types'
import {
  EAuthApiDefaultParameters,
  EAuthApiPathnames,
  EResponseType,
} from '../constants/api'
import { getLocationHref } from '../utils/url'

export const lifeSelector = (state: NStore.IState) => state.life

export const lifeStatusSelector = (state: NStore.IState) =>
  lifeSelector(state).status

export const lifeCredentialsSelector = (state: NStore.IState) =>
  lifeSelector(state).credentials

export const lifeAccessTokenSelector = (state: NStore.IState) =>
  lifeCredentialsSelector(state).accessToken

export const lifeOAuth2UrlSelector = (state: NStore.IState) => {
  const { redirectUri, clientId } = lifeCredentialsSelector(state)

  return getLocationHref({
    origin: EAuthApiDefaultParameters.ORIGIN,
    pathname: EAuthApiPathnames.AUTHENTICATE,
    param: {
      client_id: clientId,
      redirect_uri: redirectUri,
      response_type: EResponseType.CODE,
    },
  })
}
