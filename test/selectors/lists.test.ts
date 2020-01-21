import { adaptGetLists } from '../../src/adapter/lists'
import { initialState } from '../../src/DEPRECATED_reducers/app'
import {
  listSelector,
  listsSelector,
} from '../../src/DEPRECATED_selectors/lists'
import { NLists, NStore } from '../../types'
import { payload as payloadGetLists } from '../epics/__mocks__/getListsAsync.resolve'

const list = adaptGetLists(payloadGetLists) as NLists.IList
const state: NStore.IState = {
  ...initialState,
  lists: {
    entities: {
      [list.id]: list,
    },
  },
}

describe('selectors/lists', () => {
  it('should get lists state', () => {
    expect(listsSelector({ ...initialState })).toMatchSnapshot()
    expect(listsSelector(state)).toMatchSnapshot()
  })

  it('should get list', () => {
    expect(listSelector({ ...initialState }, list.id)).toMatchSnapshot()
    expect(listSelector(state, list.id)).toMatchSnapshot()
  })
})
