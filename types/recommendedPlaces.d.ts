declare namespace NRecommendedPlaces {
  interface IResponse {
    warning?: IWarning
    suggestedRadius?: number
    headerLocation: string
    headerFullLocation: string
    headerLocationGranularity: string
    totalResults: number
    suggestedBounds: ISuggestedBounds
    groups: IGroup[]
    suggestedFilters?: ISuggestedFilters
    geocode?: IGeocode
  }

  interface IGeocode {
    what: string
    where: string
    center: ICenter
    displayString: string
    cc: string
    geometry: IGeometry
    slug: string
    longId: string
  }

  interface ICenter {
    lat: number
    lng: number
  }

  interface IGeometry {
    bounds: IBounds
  }

  interface IBounds {
    ne?: IBoundsLocation
    nw?: IBoundsLocation
    se?: IBoundsLocation
    sw?: IBoundsLocation
  }

  interface IGroup {
    type: string
    name: string
    items: IGroupItem[]
  }

  interface IGroupItem {
    reasons: IReasons
    venue: NVenue.IVenue
    referralId?: string
  }

  interface IReasons {
    count: number
    items: IReasonsItem[]
  }

  interface IReasonsItem {
    summary: string
    type: string
    reasonName: string
  }

  interface ISuggestedBounds {
    ne?: IBoundsLocation
    nw?: IBoundsLocation
    se?: IBoundsLocation
    sw?: IBoundsLocation
  }

  interface IBoundsLocation {
    lat: number
    lng: number
  }

  interface ISuggestedFilters {
    header: string
    filters: IFilter[]
  }

  interface IFilter {
    name: string
    key: string
  }

  interface IWarning {
    text: string
  }
}
