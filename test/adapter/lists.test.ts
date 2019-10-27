import { adaptGetLists } from '../../src/adapter/lists'
import { payload as payloadGetLists } from '../epics/__mocks__/getListsAsync.resolve'

describe('adapter/lists/adaptGetLists', () => {
  it('should get an empty list', () => {
    expect(
      adaptGetLists({
        ...payloadGetLists,
        meta: {
          code: 400,
          requestId: payloadGetLists.meta.requestId,
        },
      })
    ).toEqual(null)
  })

  it('should get a list of categories', () => {
    expect(adaptGetLists(payloadGetLists)).toMatchSnapshot()
  })
})
