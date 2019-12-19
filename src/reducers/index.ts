import { applyMiddleware, createStore, Middleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { epicMiddleware, rootEpic } from '../middlewares'
import { appReducer } from './app'

export { initialState, TState } from './app'

export const configureStore = ({
  middlewares,
}: {
  middlewares: Middleware[]
}) => {
  const composeEnhancers = composeWithDevTools({})
  const store = createStore(
    appReducer,
    composeEnhancers(applyMiddleware(epicMiddleware, ...middlewares))
  )

  epicMiddleware.run(rootEpic)
  return store
}
