import React, {Component} from 'react';
import {Provider} from 'react-native-paper';
import {theme} from './core/theme';
import Router from './config/Router/Router';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Provider theme={theme}>
        <Router />
      </Provider>
    );
  }
}

export default App;
