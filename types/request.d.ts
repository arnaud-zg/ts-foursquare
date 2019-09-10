export declare namespace NRequest {
  interface IVenuesExplorePayload {}

  interface IVenuesExplorePayloadByPlace extends IVenuesExplorePayload {}

  interface IVenuesExplorePayloadByLocation extends IVenuesExplorePayload {}

  type TVenuesExplorePayload =
    | IVenuesExplorePayloadByPlace
    | IVenuesExplorePayloadByLocation

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
}
