import { NRoot } from '../../types/root.d'

export const lifeSelector = (state: NRoot.IState) => state.life

export const credentialsSelector = (state: NRoot.IState) =>
  state.life.credentials
