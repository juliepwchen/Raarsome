import React, { Component } from 'react';
import { Provider } from 'react-redux';

import RaarsomeRootNavigation from './components/RaarsomeRootNavigation';

import configureStore from './store';
const store = configureStore();

class App extends Component {
  render() {
    return(
        <Provider store={store}>
          <RaarsomeRootNavigation />
        </Provider>    
    );
}
}

export default App;

