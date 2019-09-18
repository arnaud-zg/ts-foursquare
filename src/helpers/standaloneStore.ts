import { AnyAction, StoreCreator } from 'redux'

type Listener = (action: AnyAction | null, state: any) => void

export class StandaloneStore {
  private listeners: Array<Listener>
  private store: ReturnType<StoreCreator>
  private lastAction: AnyAction | null

  constructor({ store }: { store: ReturnType<StoreCreator> }) {
    this.lastAction = null
    this.listeners = []
    this.store = store

    this.store.subscribe(this.storeUpdate)
  }

  dispatchAction = (action: AnyAction) => {
    this.lastAction = action
    this.store.dispatch(action)
  }

  storeUpdate = () => {
    const state = this.store.getState()

    if (this.listeners.length) {
      this.listeners.forEach(listener => {
        listener(this.lastAction, state)
      })
    }
  }

  subscribe(listener: Listener) {
    this.listeners.push(listener)
  }
}
