import t from 'tachyons-js';
import ListItem from './ListItem';

const styles = {
  TotalsHistory: {
    ...t.flex,
    ...t.flex_column,
    ...t.justify_center,
    ...t.items_center,
    color: '#738D99',
    flex: 1,
    height: 345,
    width: 100,
    borderRight: '1px #CCC solid',
    backgroundColor: '#F7F7F7',
  },
  TotalsHistoryList: {
    ...t.flex,
    ...t.flex_column,
    ...t.justify_start,
    ...t.items_start,
    ...t.overflow_scroll,
    color: '#738D99',
    flex: 1,
    height: 345,
    width: 100,
    borderRight: '1px #CCC solid',
    backgroundColor: '#F7F7F7',
  }
}

export default class TotalsHistory extends React.Component {
  propTypes: {
    values: PropTypes.array,
  }

  showHistory = () => {
    return this.props.values.map( ( value, index ) => (
      <ListItem value={ value } />
    ) );
  }

  render() {
    return(
      <div className="TotalsHistory" style={ this.props.values.length == 0 ?  styles.TotalsHistory : styles.TotalsHistoryList }>{ this.props.values.length === 0 ? <span className="empty">No History</span> : this.showHistory() }</div>
    );
  }
}
