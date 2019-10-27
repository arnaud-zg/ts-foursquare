import { NEntity } from './entity.d'
import { NVenue } from './venue.d'

export declare namespace NSimilarVenues {
  interface IResponse {
    similarVenues: NEntity.IEntityGroup<NVenue.IVenue>
  }
}
