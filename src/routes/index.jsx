import React, { useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from '../components/Home';
import Results from '../components/Results';
import { loadCharacters } from '../redux/actions/general_actions';
import NotFoundError from '../components/Error404';

const Urls = () => {
  const dispatch = useDispatch();

  useMemo(() => {
    dispatch(loadCharacters());
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact={true} path='/' 
          component={Home} />
        <Route exact={true} path='/find' component={Results}/>
        <Route component={NotFoundError}/>
      </Switch>
    </Router>
  );
};

export default Urls;