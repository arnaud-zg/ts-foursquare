export const lifeSelector = (state: NStore.IState) => state.life

export const lifeStatusSelector = (state: NStore.IState) =>
  lifeSelector(state).status

export const credentialsSelector = (state: NStore.IState) =>
  lifeSelector(state).credentials
