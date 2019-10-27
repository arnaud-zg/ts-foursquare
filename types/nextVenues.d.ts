import { NEntity } from './entity.d'
import { NVenue } from './venue.d'

export declare namespace NNextVenues {
  interface IResponse {
    nextVenues: NEntity.IEntityGroup<NVenue.IVenue>
  }
}
