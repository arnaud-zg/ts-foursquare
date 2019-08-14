import { NLife } from '../../types/life'
import { NVenues } from '../../types/venues'
import { initialState as initialStateLife } from './life'
import { initialState as initialStateVenues } from './venues'

export type TRootState = {
  life: NLife.IState
  venues: NVenues.IState
}

export const initialState = {
  life: initialStateLife,
  venues: initialStateVenues,
}

export * from './life'
export * from './venues'
