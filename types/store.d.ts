import { NLife } from './lifeState'
import { NRequestState } from './requestState'
import { NStatus } from './statusState'
import { NVenues } from './venuesState'

export declare namespace NStore {
  interface IState {
    life: NLife.IState
    request: NRequestState.IState
    status: NStatus.IState
    venues: NVenues.IState
  }
}
