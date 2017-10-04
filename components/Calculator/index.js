import ReactDOM from 'react-dom';
import Total from '../Total';
import TotalsHistory from '../TotalsHistory';
import Keyboard from '../Keyboard';
import t from 'tachyons-js';

const styles = {
  Calculator: {
    ...t.flex,
    ...t.flex_column,
    ...t.br4,
    ...t.shadow_2,
    ...t.overflow_hidden,
    height: 420,
    width: 450,
    backgroundColor: '#FFF',
    border: '1px #CCC solid',
  },
  Main: {
    ...t.flex,
  }
}

export default class Calculator extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
      currentValue: 0,
      savedValue: 0,
      lastValue: 0,
      operator: null,
      operated: false,
      valuesHistory: [],
      showHistory: true,
    };
  }

  numberClick = ( e, props ) => {
    if( this.state.currentValue == 0 ) {
      this.setState({
        currentValue: `${ props.label }`
      })
    } else {
      this.setState({
        currentValue: `${ this.state.currentValue }${ props.label }`
      })
    }
  }

  operatorClick = ( e, props ) => {
    if( props.label != '=' ) {
      if( this.state.operator === null ) {
        this.setState({
          operator: props.label,
          lastValue: this.state.currentValue,
          currentValue: 0,
        })
      }
    } else {
      let value, valuesHistory;

      switch( this.state.operator ) {
        case '+':
          value = Number( this.state.currentValue ) + Number( this.state.lastValue );
          valuesHistory = Object.assign( [], this.state.valuesHistory );
          valuesHistory.unshift( value );

          this.setState( {
            currentValue: 0,
            lastValue: value,
            operator: null,
            valuesHistory: valuesHistory
          } );

          break;
        case '÷':
          value = Number( this.state.lastValue ) / Number( this.state.currentValue );
          valuesHistory = Object.assign( [], this.state.valuesHistory );
          valuesHistory.unshift( value );

          this.setState( {
            currentValue: 0,
            lastValue: value,
            operator: null,
            valuesHistory: valuesHistory
          } );

          break;
        case 'x':
          value = Number( this.state.lastValue ) * Number( this.state.currentValue );
          valuesHistory = Object.assign( [], this.state.valuesHistory );
          valuesHistory.unshift( value );

          this.setState( {
            currentValue: 0,
            lastValue: value,
            operator: null,
            valuesHistory: valuesHistory
          } );

          break;
        case '-':
          value = Number( this.state.lastValue ) - Number( this.state.currentValue );
          valuesHistory = Object.assign( [], this.state.valuesHistory );
          valuesHistory.unshift( value );

          this.setState( {
            currentValue: 0,
            lastValue: value,
            operator: null,
            valuesHistory: valuesHistory
          } );

          break;
      }
    }
  }

  render() {
    return(
      <div className="Calculator" style={ styles.Calculator }>

        <Total
          hasToolbar
          showHistory={ this.state.showHistory }
          lastValue={ this.state.lastValue }
          value={ this.state.currentValue }
          operator={ this.state.operator } />

        <div className="Main" style={ styles.Main }>
          <TotalsHistory
            show={ this.state.showHistory }
            values={ this.state.valuesHistory } />

          <Keyboard
            numberClick={ this.numberClick }
            operatorClick={ this.operatorClick } />

        </div>
      </div>
    );
  }
}
