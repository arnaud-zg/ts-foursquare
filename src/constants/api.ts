export const CLIENT_ID_KEY = 'apiClientId'
export const CLIENT_SECRET_KEY = 'apiClientSecret'

export interface ICredentials {
  [CLIENT_ID_KEY]: string
  [CLIENT_SECRET_KEY]: string
}

export enum EApiDefaultParameters {
  VERSION = '20190425',
}
