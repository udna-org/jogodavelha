import React from 'react';
import { Provider } from 'react-redux';
import './config/reactotron';
import Home from './pages/Home';
import store from './store';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <Home/>
    </Provider>
  );
}

export default App;
