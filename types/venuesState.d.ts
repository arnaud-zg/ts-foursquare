import { NVenue } from './venue'

export declare namespace NVenues {
  interface IState {
    entities: {
      [key: string]: NVenue.IVenue
    }
  }
}
