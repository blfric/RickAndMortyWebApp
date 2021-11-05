import * as React from "react";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import MainContainer from "./mainContainer";
import { useSelector, useDispatch } from 'react-redux';
import Card from "./Card";
import HeroPortal from '../images/hero-portal.png';
import { loadCharacters, getCharacterByName } from "../redux/actions/general_actions";

const Home = () => {
  const characters = useSelector(state => state.characters);
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
  });
  React.useEffect(() => {
    console.log(state);
  }, [state])
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState(prevState => ({...prevState, open: false }))
  };

  const loadByName = () => {
    dispatch(getCharacterByName('rick')).then(res => {
      console.log(res)
    })
  }

  const loadMore = () => {
    const counting = characters.length / 20;
    if(counting >= 2) {
      setState(prevState => ({...prevState, open: true, name:"Some", vertical: 'top', horizontal: 'right', }))
      console.log('Change state', state, state.open);
    }else {
      dispatch(loadCharacters());
    }
  }

  return(
    < MainContainer>
      <section className="hero-image-container">
        <div className="hero-text">
          <h1>Welcome rick and morty web platform</h1>
          <h2>Here you will find all serie`s characters</h2>
          <h3>... and something else, maybe</h3>
        </div>
        <img src={HeroPortal} className="portal-image" />
      </section>
      <section className="title-container">
        <h1 onClick={() => loadByName()}>All rick and morty characters</h1>
      </section>
      <section className="characters-container">
        {characters.map((chr) => {
          return(
            <Card key={chr.id} data={chr} />
          )
        })}
        <button onClick={loadMore} className="load-more-button">Load more</button>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={state.open}
          onClose={handleClose}
          key={vertical + horizontal}
        >
          <Alert variant="filled" severity="success" style={{fontSize: 20}}>
            Oh oh! There is not more :)
          </Alert>
        </Snackbar>
      </section>
    </MainContainer>
  );
}

export default Home;