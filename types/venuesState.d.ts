import { NLikes } from './likes'
import { NRecommendedPlaces } from './recommendedPlaces'
import { NVenue } from './venue'
import { NVenuesCategories } from './venuesCategories'

export declare namespace NVenues {
  interface IState {
    categories: { [key: string]: NVenuesCategories.ICategory }
    entities: { [key: string]: NVenue.IVenue }
    likesEntities: { [key: string]: NLikes.IItem }
    nextVenues: { [key: string]: NVenue.IVenue }
    recommendedPlaces: NRecommendedPlaces.IGroupItem[]
    similarVenues: { [key: string]: NVenue.IVenue }
    trendingEntities: { [key: string]: NVenue.IVenue }
  }
}
