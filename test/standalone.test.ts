import { tsFoursquare } from '../src/standalone'

describe('tsFoursquare', () => {
  it('should get a snapshot of tsFoursquare instance', () => {
    const ts4Sq = new tsFoursquare({ clientId: '', clientSecret: '' })

    ts4Sq.actions.getLists({
      payload: { listId: '5580721e498e7c48540bf83f' },
    })

    expect(ts4Sq).toMatchSnapshot()
  })
})
