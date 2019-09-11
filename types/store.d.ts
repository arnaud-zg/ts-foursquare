import { NLife } from './lifeState'
import { NStatus } from './statusState'
import { NVenues } from './venuesState'

export declare namespace NStore {
  interface IState {
    life: NLife.IState
    status: NStatus.IState
    venues: NVenues.IState
  }
}
