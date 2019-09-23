import { NVenue } from './venue.d'

export declare namespace NMiniVenue {
  interface Response {
    minivenues: TMiniVenue[]
  }

  type TMiniVenue = Pick<NVenue.IVenue, TMiniVenueKeys>

  type TMiniVenueKeys = 'id' | 'name' | 'location' | 'categories' | 'hasPerk'

  interface IMiniVenue extends TMiniVenue {}
}
