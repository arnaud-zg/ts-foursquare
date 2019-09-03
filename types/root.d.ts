import { NLife } from './life.d'
import { NStatus } from './status.d'
import { NVenues } from './venues.d'

export declare namespace NRoot {
  interface IState {
    life: NLife.IState
    status: NStatus.IState
    venues: NVenues.IState
  }
}
