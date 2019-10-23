import { NRecommendedPlaces } from './recommendedPlaces'
import { NVenue } from './venue'
import { NMiniVenue } from './miniVenue'
import { NVenuesCategories } from './venuesCategories'

export declare namespace NVenues {
  interface IState {
    categories: { [key: string]: NVenuesCategories.ICategory }
    entities: { [key: string]: NVenue.IVenue }
    miniVenues: { [key: string]: NMiniVenue.IMiniVenue }
    nextVenues: { [key: string]: NVenue.IVenue }
    recommendedPlaces: NRecommendedPlaces.IGroupItem[]
    similarVenues: { [key: string]: NVenue.IVenue }
    trendingEntities: { [key: string]: NVenue.IVenue }
  }
}
