import React, {
  AppRegistry,
} from 'react-native';
import App from './app/containers/App';
import { Provider } from 'react-redux';
import configureStore from './app/store/configureStore';


function createApp(store) {
  return function JMapCreator() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  };
}

(function start() {
  const store = configureStore({});

  AppRegistry.registerComponent('EzCrab', () => createApp(store));
}());
