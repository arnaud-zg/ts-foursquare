import { tsFoursquare, EReturnType } from '../src/standalone'
import { mockingFetch } from '../src/utils/test'
import { payload as payloadGetLists } from '../src/actions/__mocks__/getLists.resolve'

describe('tsFoursquare', () => {
  it('should get a snapshot of tsFoursquare instance', () => {
    mockingFetch({ response: { ...payloadGetLists } })
    const ts4Sq = new tsFoursquare({ clientId: '', clientSecret: '' })
    ts4Sq.getLists({ payload: { listId: '5580721e498e7c48540bf83f' } })
    expect(ts4Sq).toMatchSnapshot()
  })

  it('should get a snapshot of tsFoursquare instance with observable return type', () => {
    mockingFetch({ response: { ...payloadGetLists } })
    const ts4Sq = new tsFoursquare({
      clientId: '',
      clientSecret: '',
      returnType: EReturnType.OBSERVABLE,
    })
    ts4Sq.getLists({ payload: { listId: '5580721e498e7c48540bf83f' } })
    expect(ts4Sq).toMatchSnapshot()
  })
})
