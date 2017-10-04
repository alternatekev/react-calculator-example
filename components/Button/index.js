import t from 'tachyons-js';


export default class Button extends React.Component {
  propTypes: {
    flex: PropTypes.number,
    operator: PropTypes.bool,
    onClick: PropTypes.func,
  }

  onClick = ( e ) => {
    this.props.onClick( e, this.props );
  }

  render() {
    const styles = {
      Button: {
        ...t.dib,
        ...t.br2,
        ...t.pt2,
        ...t.pb2,
        ...t.f1,
        ...t.ma1,
        ...t.outline_0,
        width: `${ 25 * this.props.flex }%`,
        'cursor': 'pointer',
        color: this.props.operator ? '#FFF' : '#738D99',
        backgroundColor: this.props.operator ? '#F5A623' : '#FFF',
        border: this.props.operator ? 'transparent' : '1px #A5BEC9 solid',
      }
    };

    return(
      <button onClick={ this.onClick } className="Button" style={ styles.Button }>{ this.props.label }</button>
    );
  }
}
