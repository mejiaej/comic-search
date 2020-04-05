import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import ComicBook from './reducers/ComicBookReducer';

const root = combineReducers({
  ComicBook,
});

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  root,
  composeEnhancers(applyMiddleware(ReduxThunk, ReduxPromise)),
);

export default store;
