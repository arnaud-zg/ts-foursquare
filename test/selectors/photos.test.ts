import { adaptGetPhotosDetails } from '../../src/adapter/photos'
import { initialState } from '../../src/reducers/app'
import { photoSelector, photosSelector } from '../../src/selectors/photos'
import { NPhotos, NStore } from '../../types'
import { payload as payloadGetPhotosDetails } from '../epics/__mocks__/getPhotosDetailsAsync.revolve'

const entity = adaptGetPhotosDetails(payloadGetPhotosDetails) as NPhotos.IPhoto
const state: NStore.IState = {
  ...initialState,
  photos: {
    entities: {
      [entity.id]: entity,
    },
  },
}

describe('selectors/photos', () => {
  it('should get photos state', () => {
    expect(photosSelector({ ...initialState })).toMatchSnapshot()
    expect(photosSelector(state)).toMatchSnapshot()
  })

  it('should get photo', () => {
    expect(photoSelector({ ...initialState }, entity.id)).toMatchSnapshot()
    expect(photoSelector(state, entity.id)).toMatchSnapshot()
  })
})
