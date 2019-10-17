import { NRecommendedPlaces } from './recommendedPlaces'
import { NVenue } from './venue'
import { NVenuesCategories } from './venuesCategories'

export declare namespace NVenues {
  interface IState {
    categories: NVenuesCategories.ICategory[]
    entities: { [key: string]: NVenue.IVenue }
    nextVenues: { [key: string]: NVenue.IVenue }
    recommendedPlaces: NRecommendedPlaces.IGroupItem[]
    similarVenues: { [key: string]: NVenue.IVenue }
    trendingEntities: { [key: string]: NVenue.IVenue }
  }
}
