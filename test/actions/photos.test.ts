import { getPhotosDetailsAsync } from '../../src/actions/photos'

describe('actions/photos', () => {
  it(`should make a snapshot of getPhotosDetailsAsync`, () => {
    expect(getPhotosDetailsAsync).toMatchSnapshot()
  })
})
