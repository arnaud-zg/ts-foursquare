declare namespace NNextVenues {
  interface IResponse {
    nextVenues: INextVenues
  }

  interface INextVenues {
    count: number
    items: NVenue.IVenue[]
  }
}
