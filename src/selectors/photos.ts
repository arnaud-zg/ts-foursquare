import { NPhotos, NStore } from '../../types'

export const photoSelector = (
  state: NStore.IState,
  listId: string
): NPhotos.IPhoto => photosSelector(state).entities[listId]

export const photosSelector = (state: NStore.IState) => state.photos
