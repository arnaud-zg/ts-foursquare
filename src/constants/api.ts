export const CLIENT_ID_KEY = 'apiClientId'
export const CLIENT_SECRET_KEY = 'apiClientSecret'

export interface ICredentials {
  [CLIENT_ID_KEY]: string
  [CLIENT_SECRET_KEY]: string
}

export enum EApiDefaultParameters {
  ORIGIN = 'https://api.foursquare.com',
  VERSION = '20190425',
}

export enum EApiPathnames {
  VENUES_SEARCH = '/v2/venues/search',
}
