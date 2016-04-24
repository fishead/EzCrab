import React, { Component, PropTypes, View, Text } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';


class Welcome extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }

  handleRoute = (route) => () => {
    this.props.navigator.push(route);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome} onPress={this.handleRoute({ name: 'project-list' })}>
            Project
          </Text>
        </View>
        <View>
          <Text style={styles.welcome} onPress={this.handleRoute({ name: 'layer-class-list' })}>
            Layer Class
          </Text>
        </View>
        <View>
          <Text style={styles.welcome} onPress={this.handleRoute({ name: 'layer-list' })}>
            Layer
          </Text>
        </View>
      </View>
    );
  }
}

export default connect()(Welcome);
