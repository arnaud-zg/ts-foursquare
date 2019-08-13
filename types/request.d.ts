export declare namespace NRequest {
  interface IVenuesSearchPayloadByName {
    name: string
  }

  interface IVenuesSearchPayloadByLatLong {
    ll: string
    query?: string
    intent?: 'checkin' | 'global' | 'browse' | 'match'
    radius?: number
  }

  type TVenuesSearchPayload =
    | IVenuesSearchPayloadByName
    | IVenuesSearchPayloadByLatLong
}
