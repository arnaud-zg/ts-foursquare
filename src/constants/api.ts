export enum EApiDefaultParameters {
  ORIGIN = 'https://api.foursquare.com',
  VERSION = '20191016',
}

export enum EApiPathnames {
  VENUES_CATEGORIES = '/v2/venues/categories',
  VENUES_EXPLORE = '/v2/venues/explore',
  VENUES_LIKES = '/v2/venues/:venueId/likes',
  VENUES_LISTED = '/v2/venues/:venueId/listed',
  VENUES_NEXT_VENUES = '/v2/venues/:venueId/nextvenues',
  VENUES_SEARCH = '/v2/venues/search',
  VENUES_SIMILAR = '/v2/venues/:venueId/similar',
  VENUES_SUGGEST_COMPLETION = '/v2/venues/suggestcompletion',
  VENUES_TRENDING = '/v2/venues/trending',
}
