import { NStore } from '../../types'

export const lifeSelector = (state: NStore.IState) => state.life

export const lifeStatusSelector = (state: NStore.IState) =>
  lifeSelector(state).status

export const lifeCredentialsSelector = (state: NStore.IState) =>
  lifeSelector(state).credentials

export const lifeAccessTokenSelector = (state: NStore.IState) =>
  lifeCredentialsSelector(state).accessToken
