import { NVenue } from './venue'

export declare namespace NRecommendedPlaces {
  interface IRecommendedPlace {
    reasons: {
      count: number
      items: {
        summary: string
        type: string
        reasonName: string
      }[]
    }
    venue: NVenue.IVenue[]
  }

  interface IRecommendedPlaces {
    type: 'Recommended Places'
    name: 'recommended'
    items: IRecommendedPlace[]
  }

  interface IApiResponse {
    warning: {
      text: string
    }
    suggestedRadius: number
    headerLocation: string
    headerFullLocation: string
    headerLocationGranularity: string
    totalResults: number
    suggestedBounds: {
      ne: {
        lat: number
        lng: number
      }
      nw: {
        lat: number
        lng: number
      }
      se: {
        lat: number
        lng: number
      }
      sw: {
        lat: number
        lng: number
      }
    }
    groups: IRecommendedPlace[]
  }
}
