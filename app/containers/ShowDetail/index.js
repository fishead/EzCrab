import React, {
  Component,
  PropTypes,
  Text,
  TouchableHighlight,
  ListView,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/episode';
import styles from './styles';


class ShowDetail extends Component {
  static propTypes = {
    show: PropTypes.object.isRequired,
    episodes: PropTypes.array.isRequired,
    searchEpisodes: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.id !== r2.id });
    this.state = {
      ds,
      dataSource: ds.cloneWithRows(props.episodes),
    };
  }

  componentWillMount() {
    this.props.searchEpisodes(this.props.show);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.ds.cloneWithRows(nextProps.episodes),
    });
  }

  handleShowPress = episode => () => {
    this.props.navigator.push({
      name: 'episode-detail',
      episode,
    });
  }

  renderEpisodeItem = (episode) => {
    return (
      <TouchableHighlight key={episode.id} style={styles.episode} onPress={this.handleShowPress(episode)}>
        <Text>{episode.title}</Text>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.show.title}</Text>

        <ListView style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={this.renderEpisodeItem}
        />
      </View>
    );
  }
}


function mapStateToProps(state) {
  return {
    episodes: state.episodes.map(episodeId => state.entities.episodes[episodeId]),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetail);
