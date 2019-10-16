declare namespace NSimilarVenues {
  interface IResponse {
    similarVenues: ISimilarVenues
  }

  interface ISimilarVenues {
    count: number
    items: NVenue.IVenue[]
  }
}
