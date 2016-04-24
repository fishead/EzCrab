import React, {
  Component,
  // PropTypes,
  Navigator,
  Text,
  TouchableOpacity,
} from 'react-native';
import WelcomeView from '../Welcome';
import ShowListView from '../ShowList';
import ShowDetailView from '../ShowDetail';

import { connect } from 'react-redux';
import styles from './styles';


const NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    const previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity onPress={navigator.pop} style={styles.navBarLeftButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          {'Back' || previousRoute.name}
        </Text>
      </TouchableOpacity>
    );
  },

  RightButton(route, navigator, index, navState) { // eslint-disable-line
    return (
      <TouchableOpacity style={styles.navBarRightButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          Next
        </Text>
      </TouchableOpacity>
    );
  },

  Title(route, navigator, index, navState) { // eslint-disable-line
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.name}
      </Text>
    );
  },

};


export default class App extends Component { // eslint-disable-line
  static propTypes = { }

  handleConnectivityChange = (isConnected) => {
    if (!isConnected) { return; }
  }

  configureScene = () => {
    return Navigator.SceneConfigs.FloatFromRight;
  };

  renderScene = (router, navigator) => {
    const routes = {
      welcome: WelcomeView,
      'show-list': ShowListView,
      'show-detail': ShowDetailView,
    };
    let Scene = routes[router.name] || WelcomeView;
    const props = {
      ...router,
      navigator,
    };

    return (
      <Scene {...props} />
    );
  };

  renderNavBar = () => {
    return (
      <Navigator.NavigationBar
        routeMapper={NavigationBarRouteMapper}
        style={styles.navBar}
      />
    );
  };

  render() {
    return (
      <Navigator
        style={styles.appContainer}
        initialRoute={{ name: 'show-list' }}
        configureScene={this.configureScene}
        renderScene={this.renderScene}
        sceneStyle={styles.scene}
        navigationBar={this.renderNavBar()}
      />
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(App);
