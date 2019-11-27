import { NAuth, NOAuth2 } from '../../types'

export const adaptGetAccessToken = (
  payload: NOAuth2.IResponse
): NAuth.IAuth => ({
  accessToken: payload.access_token,
})
