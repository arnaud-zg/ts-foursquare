import { getListsAsync } from '../../src/actions/lists'

describe('actions/lists', () => {
  it(`should make a snapshot of getListsAsync`, () => {
    expect(getListsAsync).toMatchSnapshot()
  })
})
