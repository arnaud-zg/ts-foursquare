import { NLists } from './lists.d'

export declare namespace NListsState {
  interface IState {
    entities: { [listId: string]: NLists.IList }
  }
}
