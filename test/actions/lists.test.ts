import { getListsAsync } from '../../src/DEPRECATED_actions/lists'

describe('actions/lists', () => {
  it(`should make a snapshot of getListsAsync`, () => {
    expect(getListsAsync).toMatchSnapshot()
  })
})
