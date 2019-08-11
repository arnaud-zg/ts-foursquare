import { NVenue } from './venue.d'

export declare namespace NVenues {
  interface IState {
    venues: {
      [key: string]: NVenue.IVenue
    }
  }
}
