import { ActionType, action } from 'typesafe-actions'

export enum ELifeActionRequest {}

export enum ELifeActionResolve {
  RESOLVE_GET_LIFE = 'RESOLVE_GET_LIFE',
}

export const getLife = () =>
  action(ELifeActionResolve.RESOLVE_GET_LIFE, { life: true })

const actions = {
  getLife,
}

export type TLifeActions = ActionType<typeof actions>
