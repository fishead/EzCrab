import { StyleSheet } from 'react-native';
const navbarHeight = 50;


export default StyleSheet.create({
  messageText: {
    fontSize: 17,
    fontWeight: '500',
    padding: 15,
    marginTop: 50,
    marginLeft: 15,
  },
  appContainer: {
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'rgb(59, 111, 195)',
  },
  navBar: {
    flex: 1,
    // backgroundColor: 'rgb(192, 222, 45)',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    height: navbarHeight,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  scene: {
    // flex: 9,
    // position: 'relative',
    // flex: 1,
    // flexDirection: 'column',
    // top: 200,
    // marginTop: 50,
    // paddingTop: 300,
    paddingTop: navbarHeight,
    // backgroundColor: '#872222',
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CDCDCD',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: '#373E4D',
    fontWeight: '500',
    marginVertical: 9,
    // textAlign: 'center',
  },
  navBarTitle: {
    // flex: 5,
    // backgroundColor: 'rgb(41, 135, 133)',
  },
  navBarLeftButton: {
    // flex: 1,
    // paddingLeft: 10,
    // backgroundColor: 'rgb(77, 9, 194)',
  },
  navBarRightButton: {
    // flex: 1,
    // paddingRight: 10,
    // backgroundColor: 'rgb(17, 226, 69)',
  },
  navBarButtonText: {
    color: '#5890FF',
  },
});
