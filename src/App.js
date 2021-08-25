import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {Provider as Prov} from 'react-native-paper';
import Router from './router';
import configureStore from './store';
import {SQLiteContext, SQLite3} from './config/sqlLite';
import {theme} from './core/theme';

const store = configureStore();

export class App extends Component {
  render() {
    return (
      <Prov theme={theme}>
        <Provider store={store}>
          <SQLiteContext.Provider value={new SQLite3()}>
            <NavigationContainer>
              <Router />
            </NavigationContainer>
          </SQLiteContext.Provider>
        </Provider>
      </Prov>
    );
  }
}

export default App;
