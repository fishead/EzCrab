import React, { Component, PropTypes, View, Text, StyleSheet } from 'react-native';


export default class WithLabel extends Component {
  static propTypes = {
    children: PropTypes.object,
    label: PropTypes.string,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.label}>
          <Text style={styles.labelText}>{this.props.label}</Text>
        </View>
        <View style={styles.content}>
          {this.props.children}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // backgroundColor: 'rgb(254, 127, 110)',
  },
  label: {
    flex: 1,
    // backgroundColor: 'rgb(191, 168, 52)',
    alignSelf: 'center',
    // width: 100,
  },
  content: {
    flex: 3,
    // backgroundColor: 'rgb(69, 208, 52)',
  },
  labelText: {
    // fontSize: 24,
    // height: 30,
    // width: 120,
  },
});
