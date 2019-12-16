import React from 'react';
import './config/Reactototron';
import Home from './pages/Home';
import GlobalStyle from './styles/global';


/** Redux */
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <Home/>
    </Provider>
  );
}

export default App;
