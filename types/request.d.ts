export declare namespace NRequest {
  interface IVenuesExplorePayload {
    alt?: number
    altAcc?: number
    day?: string
    friendVisits?: 'visited' | 'notvisited'
    lastVenue?: string
    limit?: number
    llAcc?: number
    novelty?: 'new' | 'old'
    offset?: number
    openNow?: 0 | 1
    price?: string
    query?: string
    radius?: number
    saved?: 0 | 1
    section?:
      | 'food'
      | 'drinks'
      | 'coffee'
      | 'shops'
      | 'arts'
      | 'outdoors'
      | 'sights'
      | 'trending'
      | 'nextVenues'
    sortByDistance?: 0 | 1
    time?: string
  }

  interface IVenuesExplorePayloadByPlace extends IVenuesExplorePayload {
    near: string
  }

  interface IVenuesExplorePayloadByLocation extends IVenuesExplorePayload {
    ll: string
  }

  type TVenuesExplorePayload =
    | IVenuesExplorePayloadByPlace
    | IVenuesExplorePayloadByLocation

  interface IVenuesTrending {
    limit?: number
    radius?: number
  }

  interface IVenuesTrendingByPlace extends IVenuesTrending {
    near: string
  }

  interface IVenuesTrendingByLocation extends IVenuesTrending {
    ll: string
  }

  type TVenuesTrendingPayload =
    | IVenuesTrendingByPlace
    | IVenuesTrendingByLocation

  interface IVenuesSearchPayload {
    alt?: number
    altAcc?: number
    categoryId?: string[]
    intent?: 'checkin' | 'global' | 'browse' | 'match'
    limit?: number
    linkedId?: number
    llAcc?: number
    ne?: string
    providerId?: string
    radius?: number
    sw?: string
    url?: string
  }

  interface IVenuesSearchPayloadByQuery extends IVenuesSearchPayload {
    query: string
  }

  interface IVenuesSearchPayloadByLocation extends IVenuesSearchPayload {
    ll: string
  }

  interface IVenuesSearchPayloadByPlace extends IVenuesSearchPayload {
    near: string
  }

  type TVenuesSearchPayload =
    | IVenuesSearchPayloadByQuery
    | IVenuesSearchPayloadByLocation
    | IVenuesSearchPayloadByPlace

  interface IVenuesSimilarPayload {
    venueId: string
  }

  interface IVenuesSuggestCompletionPayload {
    alt?: number
    altAcc?: number
    limit?: number
    llAcc?: number
    ne?: string
    radius?: number
    sw?: string
  }

  interface IVenuesSuggestCompletionByLocation
    extends IVenuesSuggestCompletionPayload {
    ll: string
    query: string
  }

  interface IVenuesSuggestCompletionByPlace
    extends IVenuesSuggestCompletionPayload {
    near: string
    query: string
  }

  type TVenuesSuggestCompletionPayload =
    | IVenuesSuggestCompletionByLocation
    | IVenuesSuggestCompletionByPlace

  interface IVenuesLikesPayload {
    venueId: string
  }

  interface IVenuesListedPayload {
    venueId: string
  }

  interface IVenuesNextVenuesPayload {
    venueId: string
  }
}
