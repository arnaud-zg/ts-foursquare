import { tsFoursquare } from '../src/standalone'
import { mockingFetch } from '../src/utils/test'
import { payload as payloadGetLists } from './actions/__mocks__/getListsAsync.resolve'

describe('tsFoursquare', () => {
  it('should get a snapshot of tsFoursquare instance', () => {
    mockingFetch({ response: { ...payloadGetLists } })
    const ts4Sq = new tsFoursquare({ clientId: '', clientSecret: '' })
    ts4Sq.actions.getLists({
      payload: { listId: '5580721e498e7c48540bf83f' },
    })
    expect(ts4Sq).toMatchSnapshot()
  })
})
