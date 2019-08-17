import { NLife } from './life.d'
import { NVenues } from './venues.d'

export declare namespace NRoot {
  interface IState {
    life: NLife.IState
    venues: NVenues.IState
  }
}
