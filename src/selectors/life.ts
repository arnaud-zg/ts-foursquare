import { NRoot } from '../../types/root.d'

export const credentialsSelector = (state: NRoot.IState) =>
  state.life.credentials
