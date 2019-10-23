import { NLikes } from './likes'
import { NMiniVenue } from './miniVenue'
import { NRecommendedPlaces } from './recommendedPlaces'
import { NVenue } from './venue'
import { NVenuesCategories } from './venuesCategories'

export declare namespace NVenues {
  interface IState {
    categories: { [key: string]: NVenuesCategories.ICategory }
    entities: { [key: string]: NVenue.IVenue }
    likesEntities: { [key: string]: NLikes.IItem }
    miniVenues: { [key: string]: NMiniVenue.IMiniVenue }
    nextVenues: { [key: string]: NVenue.IVenue }
    recommendedPlaces: NRecommendedPlaces.IGroupItem[]
    similarVenues: { [key: string]: NVenue.IVenue }
    trendingEntities: { [key: string]: NVenue.IVenue }
  }
}
