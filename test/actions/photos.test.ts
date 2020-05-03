import { tsFoursquare } from '../../src/standalone'
import {
  mockingFailingNotFoundFetch,
  mockingFailingNotValidFetch,
  mockingFetch,
} from '../../src/utils/test'
import { payload as payloadGetPhotosDetails } from '../../src/actions/__mocks__/getPhotosDetails.revolve'

describe('actions/photos', () => {
  test.each`
    scenario                              | payloadRequest                             | payloadResponse
    ${'should gives details about photo'} | ${{ photoId: '51e4151c498e60b5d17bc721' }} | ${payloadGetPhotosDetails}
  `('$scenario', async ({ payloadRequest, payloadResponse }) => {
    mockingFetch({ response: { ...payloadResponse } })

    const ts4Sq = new tsFoursquare({ clientId: '', clientSecret: '' })
    const response = await ts4Sq.getPhotosDetails({ payload: payloadRequest })

    expect(response).toMatchSnapshot()
  })

  describe('actions/lists | error case: no network', () => {
    beforeAll(() => {
      mockingFailingNotFoundFetch()
    })

    test.each`
      scenario                   | payloadRequest
      ${'should gives an error'} | ${{ photoId: '51e4151c498e60b5d17bc721' }}
    `('$scenario', async ({ payloadRequest }) => {
      const ts4Sq = new tsFoursquare({ clientId: '', clientSecret: '' })
      try {
        await ts4Sq.getPhotosDetails({ payload: payloadRequest })
      } catch (error) {
        expect(error).toMatchSnapshot()
      }
    })
  })

  describe('actions/lists | error case: not valid response', () => {
    beforeAll(() => {
      mockingFailingNotValidFetch()
    })

    test.each`
      scenario                   | payloadRequest
      ${'should gives an error'} | ${{ photoId: '51e4151c498e60b5d17bc721' }}
    `('$scenario', async ({ payloadRequest }) => {
      const ts4Sq = new tsFoursquare({ clientId: '', clientSecret: '' })
      try {
        await ts4Sq.getPhotosDetails({ payload: payloadRequest })
      } catch (error) {
        expect(error).toMatchSnapshot()
      }
    })
  })
})
