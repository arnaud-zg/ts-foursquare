require('isomorphic-fetch')
import { getVenuesSearch } from '../../src/actions/venues'

describe('getVenuesSearch', () => {
  it('get data from venues search endpoint', async () => {
    const state = await getVenuesSearch({
      name: 'peter luger steakhouse',
    })
    expect(state).toMatchSnapshot()
    // expect(state.meta.code).toEqual(200)
    // expect(typeof state.meta.requestId).toEqual('string')
    // expect(typeof state.response).toEqual('object')
  })

  // it('should return life state', () => {
  //   expect(
  //     getVenuesSearch({
  //       name: 'peter luger steakhouse',
  //     }) instanceof Promise
  //   ).toBeTruthy()
  // })
})
