import { charactersTypes } from '../actions/general_actions';
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
const colorAvatar = getRandomColor();

const defaultState = {
  currentUserName: "",
  currentColorAvatar: colorAvatar,
};

export default ( state = defaultState, action ) => {
  switch (action.type) {
    case charactersTypes.SET_NAME:
      return { ...state, currentUserName: action.currentName };
    default: return state;
  }
};