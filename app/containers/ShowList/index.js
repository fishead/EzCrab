import React, {
  Component,
  PropTypes,
  Text,
  TouchableHighlight,
  ListView,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/show';
import styles from './styles';


class ShowList extends Component {
  static propTypes = {
    shows: PropTypes.array.isRequired,
    searchShows: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.id !== r2.id });
    this.state = {
      ds,
      dataSource: ds.cloneWithRows(props.shows),
    };
  }

  componentWillMount() {
    this.props.searchShows();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.ds.cloneWithRows(nextProps.shows),
    });
  }

  handleShowPress = show => () => {
    this.props.navigator.push({
      name: 'show-detail',
      show,
    });
  }

  renderShowItem = (show) => {
    return (
      <TouchableHighlight key={show.id} style={styles.show} onPress={this.handleShowPress(show)}>
        <Text>{show.title}</Text>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <ListView style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderShowItem}
      />
    );
  }
}


function mapStateToProps(state) {
  return {
    shows: state.shows.map(showId => state.entities.shows[showId]),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowList);
