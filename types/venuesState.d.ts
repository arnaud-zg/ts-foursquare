import { NRecommendedPlaces } from './recommendedPlaces'
import { NVenue } from './venue'

export declare namespace NVenues {
  interface IState {
    entities: {
      [key: string]: NVenue.IVenue
    }
    recommendedPlaces: NRecommendedPlaces.IGroupItem[]
    trendingEntities: {
      [key: string]: NVenue.IVenue
    }
  }
}
