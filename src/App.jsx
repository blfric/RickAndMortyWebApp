import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/reducers/index';
import Routes from './routes';
import './styles/main.css';

const store = configureStore();

function App() {
  return(
    <Provider store={store}>
      <Routes />
    </Provider>
  )
} 

export default App;