import store from 'store'
import { PROJECT_NAME } from '../constants'
import { CLIENT_ID_KEY, CLIENT_SECRET_KEY } from '../constants/api'

export const getCredentials = () => {
  const data = store.get(PROJECT_NAME) || {}

  const { [CLIENT_ID_KEY]: clientId, [CLIENT_SECRET_KEY]: clientSecret } = data

  return {
    clientId,
    clientSecret,
  }
}

export const setCredentials = ({
  clientId,
  clientSecret,
}: {
  clientId: string
  clientSecret: string
}) => {
  if (clientId && clientSecret) {
    store.set(PROJECT_NAME, {
      [CLIENT_ID_KEY]: clientId,
      [CLIENT_SECRET_KEY]: clientSecret,
    })
  }
}

export const removeCredentials = () => {
  store.remove(PROJECT_NAME)
}
