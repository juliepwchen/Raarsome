import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';

// This connects the reducer to the store
export default function configureStore() {
  let store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return store
}