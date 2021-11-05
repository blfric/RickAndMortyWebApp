export const charactersTypes = {
  LOAD_CHARACTERS: 'characters/LOAD_CHARACTERS',
  FIND_CHARACTERS: 'finded/LOAD_FINDED_CHARACTERS',
  LOAD_PLACES: 'characters/LOAD_CHARACTERS',
  SET_NAME: 'core/SET_CURRENT_NAME'
};

export const storeCharacters = (characters) => ({
  type: charactersTypes.LOAD_CHARACTERS,
  characters
});
export const storeFindedCharacters = (characters) => ({
  type: charactersTypes.FIND_CHARACTERS,
  characters
});

export const loadCharacters = () => {
  return (dispatch, getState) => {
    const characters = getState().characters;
    const counting = characters.length / 20;
    const endPoint = counting === 0 ? '' : `/?page=${counting+1}`;
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`https://rickandmortyapi.com/api/character${endPoint}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        const formattedData = JSON.parse(result);
        console.log(formattedData);
        dispatch(storeCharacters(formattedData.results));
      }).catch(error => console.log('error', error));
  }
}

export const getCharacterByName = (name) => {
  return (dispatch, getState) => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    return fetch(`https://rickandmortyapi.com/api/character/?name=${name}`, requestOptions)
      .then(response => response.text())
      .then(async result => {
        const formattedData = JSON.parse(result);
        console.log(formattedData)
        if (formattedData.error) {
          dispatch(storeFindedCharacters([]));
        }else {
          dispatch(storeFindedCharacters(formattedData.results));
        }
      }).catch(error => console.log('error', error));
  }
}