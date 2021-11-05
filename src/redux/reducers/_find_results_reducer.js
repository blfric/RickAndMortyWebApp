
import { charactersTypes } from '../actions/general_actions';

const defaultState = []

export default ( state = defaultState, action ) => {
  switch (action.type) {
    case charactersTypes.FIND_CHARACTERS:
      return action.characters ;
    default: return state;
  }
};