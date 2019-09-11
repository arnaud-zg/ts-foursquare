import { NStore } from '../../types/store'

export const lifeSelector = (state: NStore.IState) => state.life

export const lifeStatusSelector = (state: NStore.IState) => state.life.status

export const credentialsSelector = (state: NStore.IState) =>
  state.life.credentials
