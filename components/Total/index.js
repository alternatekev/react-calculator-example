import t from 'tachyons-js';
import NumberFormat from 'react-number-format';

export default class Total extends React.Component {
  propTypes: {
    value: PropTypes.number,
    lastValue: PropTypes.number,
    secondary: PropTypes.bool,
    compact: PropTypes.bool,
  }

  render() {

    const styles = {
      Total: {
        ...t.pa3,
        ...t.tr,
        ...t.f1,
        ...t.b,
        borderBottom: '1px #CCC solid',
        color: '#738D99',
        backgroundColor: '#F7F7F7',
      }
    }

    return(
      <div className="Total" style={ styles.Total }>{ this.props.value === 0 ? <NumberFormat thousandSeparator value={this.props.lastValue} displayType="text" /> : <NumberFormat thousandSeparator displayType="text" value={this.props.value } /> }</div>
    );
  }
}

Total.defaultProps = {
  value: 0,
}
