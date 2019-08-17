import { createStore, applyMiddleware, compose } from 'redux'
import { epicMiddleware, rootEpic } from '../middlewares'
import { appReducer } from './app'

export { initialState } from './app'

export const configureStore = () => {
  const store = createStore(
    appReducer,
    compose(applyMiddleware(epicMiddleware))
  )

  epicMiddleware.run(rootEpic)

  return store
}
