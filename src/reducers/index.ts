import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { epicMiddleware, rootEpic } from '../middlewares'
import { appReducer } from './app'

export { initialState } from './app'

const composeEnhancers = composeWithDevTools({})

export const configureStore = () => {
  const store = createStore(
    appReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  )

  epicMiddleware.run(rootEpic)

  return store
}
