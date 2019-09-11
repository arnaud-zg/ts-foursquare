import { NVenue } from './venue'

export declare namespace NRecommendedPlaces {
  interface IResponse {
    warning: IWarning
    suggestedRadius: number
    headerLocation: string
    headerFullLocation: string
    headerLocationGranularity: string
    totalResults: number
    suggestedBounds: ISuggestedBounds
    groups: IGroup[]
  }

  interface IGroup {
    type: string
    name: string
    items: IGroupItem[]
  }

  interface IGroupItem {
    reasons: IReasons
    venue: NVenue.IVenue
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

  interface IWarning {
    text: string
  }
}
