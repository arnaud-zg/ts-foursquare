export enum EApiDefaultParameters {
  ORIGIN = 'https://api.foursquare.com',
  VERSION = '20190425',
}

export enum EApiPathnames {
  VENUES_EXPLORE = '/v2/venues/explore',
  VENUES_LIKES = '/v2/venues/:venueId/likes',
  VENUES_SEARCH = '/v2/venues/search',
  VENUES_SUGGEST_COMPLETION = '/v2/venues/suggestcompletion',
  VENUES_TRENDING = '/v2/venues/trending',
}
