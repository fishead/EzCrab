import React, { Component, PropTypes, View, Text, TouchableHighlight } from 'react-native';
import noop from 'lodash/noop';
import styles from './styles';

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func.isRequired,
  };

  static defaultProps = {
    text: '保存',
    onPress: noop,
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.props.onPress}>
          <Text style={styles.button}>{this.props.text}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
