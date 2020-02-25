import { adaptGetLists } from '../../src/adapter/lists'
import { payload as payloadGetLists } from '../actions/__mocks__/getLists.resolve'

describe('adapter/lists/adaptGetLists', () => {
  it('should get an empty list', () => {
    expect(() =>
      adaptGetLists({
        ...payloadGetLists,
        meta: {
          code: 400,
          requestId: payloadGetLists.meta.requestId,
        },
      })
    ).toThrowErrorMatchingSnapshot()
  })

  it('should get a list of categories', () => {
    expect(adaptGetLists(payloadGetLists)).toMatchSnapshot()
  })
})
