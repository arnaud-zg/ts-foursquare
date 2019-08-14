import { NVenue } from './venue.d'

export declare namespace NVenues {
  interface IState {
    entities: {
      [key: string]: NVenue.IVenue
    }
  }
}
