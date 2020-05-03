import { tsFoursquare } from '../../src/standalone'
import {
  mockingFailingNotFoundFetch,
  mockingFailingNotValidFetch,
  mockingFetch,
} from '../../src/utils/test'
import { payload as payloadGetLists } from '../../src/actions/__mocks__/getLists.resolve'

describe('actions/lists', () => {
  test.each`
    scenario                                           | payloadRequest                            | payloadResponse
    ${'should gives details about a list for getList'} | ${{ listId: '5580721e498e7c48540bf83f' }} | ${payloadGetLists}
  `('$scenario', async ({ payloadRequest, payloadResponse }) => {
    mockingFetch({ response: { ...payloadResponse } })

    const ts4Sq = new tsFoursquare({ clientId: '', clientSecret: '' })
    const response = await ts4Sq.getLists({ payload: payloadRequest })

    expect(response).toMatchSnapshot()
  })

  describe('actions/lists | error case: no network', () => {
    beforeAll(() => {
      mockingFailingNotFoundFetch()
    })

    test.each`
      scenario                   | payloadRequest
      ${'should gives an error'} | ${{ listId: '5580721e498e7c48540bf83f' }}
    `('$scenario', async ({ payloadRequest }) => {
      const ts4Sq = new tsFoursquare({ clientId: '', clientSecret: '' })
      try {
        await ts4Sq.getLists({ payload: payloadRequest })
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
      ${'should gives an error'} | ${{ listId: '5580721e498e7c48540bf83f' }}
    `('$scenario', async ({ payloadRequest }) => {
      const ts4Sq = new tsFoursquare({ clientId: '', clientSecret: '' })
      try {
        await ts4Sq.getLists({ payload: payloadRequest })
      } catch (error) {
        expect(error).toMatchSnapshot()
      }
    })
  })
})
