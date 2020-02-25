import { NLifeState } from './lifeState'
import { NListsState } from './listsState'
import { NPhotosState } from './photosState'
import { NRequestState } from './requestState'
import { NStatusState } from './statusState'
import { NVenuesState } from './venuesState'

export declare namespace NStore {
  interface IState {
    life: NLifeState.IState
  }
}
