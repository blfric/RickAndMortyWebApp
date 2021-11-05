import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import charactersReducer from './_characters_reducer';
import findedCharacters from './_find_results_reducer';
import coreReducer from './_core_reducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      characters: charactersReducer,
      core: coreReducer,
      finded: findedCharacters
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};