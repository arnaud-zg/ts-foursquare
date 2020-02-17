import { adaptGetPhotosDetails } from '../../src/adapter/photos'
import { payload as payloadGetPhotosDetails } from '../actions/__mocks__/getPhotosDetailsAsync.revolve'

describe('adapter/lists/adaptGetPhotosDetails', () => {
  it('should get an empty list', () => {
    expect(() =>
      adaptGetPhotosDetails({
        ...payloadGetPhotosDetails,
        meta: {
          code: 400,
          requestId: payloadGetPhotosDetails.meta.requestId,
        },
      })
    ).toThrowErrorMatchingSnapshot()
  })

  it('should get photos details', () => {
    expect(adaptGetPhotosDetails(payloadGetPhotosDetails)).toMatchSnapshot()
  })
})
