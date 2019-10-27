import { NLists, NStore } from '../../types'

export const listSelector = (
  state: NStore.IState,
  listId: string
): NLists.IList => listsSelector(state).entities[listId]

export const listsSelector = (state: NStore.IState) => state.lists
