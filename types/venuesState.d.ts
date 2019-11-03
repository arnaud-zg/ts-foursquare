import { NLikes } from './likes'
import { NMiniVenue } from './miniVenue'
import { NRecommendedPlaces } from './recommendedPlaces'
import { NVenue } from './venue'
import { NVenueListed } from './venueListed'
import { NVenuesCategories } from './venuesCategories'
import { NEntity } from './entity'

export declare namespace NVenues {
  interface IState {
    categories: { [key: string]: NVenuesCategories.ICategory }
    entities: { [key: string]: NVenue.IVenue }
    likesEntities: { [key: string]: NLikes.IItem }
    miniVenues: { [key: string]: NMiniVenue.IMiniVenue }
    nextVenues: { [key: string]: NVenue.IVenue }
    recommendedPlaces: { [key: string]: NRecommendedPlaces.IGroupItem }
    similarVenues: { [key: string]: NVenue.IVenue }
    trendingEntities: { [key: string]: NVenue.IVenue }
    venuesListed: {
      [key: string]: NEntity.IEntityGroup<NVenueListed.IGroupItem>
    }
  }
}
