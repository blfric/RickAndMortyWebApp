
import { charactersTypes } from '../actions/general_actions';

const defaultState = []

export default ( state = defaultState, action ) => {
  switch (action.type) {
    case charactersTypes.LOAD_CHARACTERS:
      return [ ...state, ...action.characters ];
    default: return state;
  }
};