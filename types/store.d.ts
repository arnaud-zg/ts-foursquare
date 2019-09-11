import { NLife } from './life'
import { NStatus } from './status'
import { NVenues } from './venues'

export declare namespace NStore {
  interface IState {
    life: NLife.IState
    status: NStatus.IState
    venues: NVenues.IState
  }
}
