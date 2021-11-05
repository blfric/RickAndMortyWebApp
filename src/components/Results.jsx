import * as React from "react";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import MainContainer from "./mainContainer";
import { useSelector, useDispatch } from 'react-redux';
import Card from "./Card";
import HeroPortal from '../images/hero-portal.png';
import { getCharacterByName } from "../redux/actions/general_actions";

const Results = () => {
  const finded = useSelector(state => state.finded);
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    name: '', severity: 'warning', message: '', open: false,
    vertical: 'top', horizontal: 'right'
  });

  const { vertical, horizontal } = state;
  const findByName = () => {
    if(state.name === "") {
      setState(prevState => ({
        ...prevState, message: "Name can't be empty", severity: 'warning', open:  true,
      }))
    } else {
      dispatch(getCharacterByName(state.name));
    }

  }
  const handleClose = () => {
    setState(prevState => ({...prevState, open: false }))
  };
  const onChange = (value) => {
    const target = value.target;
    setState(prevState => ({
      ...prevState,
      name: target.value
    }))
  }

  return(
    < MainContainer>
      <section className="hero-image-find-container">
        <p>Find your favorite characters</p>
      </section>
      <section className="title-container">
        <input onChange={onChange} value={state.name} className="find-input" placeholder="Type a name"/>
        <button className='button-find' onClick={findByName}>Find</button>
      </section>
      {finded.length > 0 ? 
      <section className="characters-container">
        {finded.map((chr) => {
          return(
            <Card key={chr.id} data={chr} />
          )
        })}
      </section>
      :
      <section className="characters-container">
        <h5>{state.name !== "" ? `Sorry, there's not results for: ${state.name}` : 'Type a name an click on Find button!'}</h5>
      </section>
      }
      <Snackbar
          anchorOrigin={{vertical, horizontal}}
          open={state.open}
          onClose={handleClose}
        >
          <Alert variant="filled" severity={state.severity} style={{fontSize: 17}}>
            {state.message}
          </Alert>
        </Snackbar>
    </MainContainer>
  );
}

export default Results;