import { adaptGetPhotosDetails } from '../../src/adapter/photos'
import { payload as payloadGetPhotosDetails } from '../epics/__mocks__/getPhotosDetailsAsync.revolve'

describe('adapter/lists/adaptGetPhotosDetails', () => {
  it('should throw an error', () => {
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

  it('should get details of a photo', () => {
    expect(adaptGetPhotosDetails(payloadGetPhotosDetails)).toMatchSnapshot()
  })
})
