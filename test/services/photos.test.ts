import { getPhotosDetailsAsync } from '../../src/DEPRECATED_actions'
import { getObservablePhotosDetails } from '../../src/services'

describe('services/getObservablePhotosDetails', () => {
  it('should get an observable instance', () => {
    const action = getPhotosDetailsAsync.request({
      photoId: '51e4151c498e60b5d17bc721',
    })

    expect(getObservablePhotosDetails({ action })).toMatchSnapshot()
  })
})
