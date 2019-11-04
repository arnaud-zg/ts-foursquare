import { NLifeState } from './lifeState'
import { NListsState } from './listsState'
import { NPhotosState } from './photosState'
import { NRequestState } from './requestState'
import { NStatusState } from './statusState'
import { NVenues } from './venuesState'

export declare namespace NStore {
  interface IState {
    life: NLifeState.IState
    lists: NListsState.IState
    photos: NPhotosState.IState
    request: NRequestState.IState
    status: NStatusState.IState
    venues: NVenuesState.IState
  }
}
