import Button from '../Button';
import t from 'tachyons-js';

const styles = {
  Keyboard: {
    flex: 1.5,
    ...t.pa1,
  },
  ButtonRow: {
    ...t.flex,
    width: '100%',
  }
}

export default class Keyboard extends React.Component {

  propTypes: {
    numberClick: PropTypes.func,
    operatorClick: PropTypes.func,
  }

  render() {
    return(
      <div className="Keyboard" style={ styles.Keyboard }>

        <div className="ButtonRow" style={ styles.ButtonRow }>
          <Button onClick={ this.props.numberClick } flex={ 1 } label="7" />
          <Button onClick={ this.props.numberClick } flex={ 1 } label="8" />
          <Button onClick={ this.props.numberClick } flex={ 1 } label="9" />
          <Button onClick={ this.props.operatorClick } operator flex={ 1 } label="÷" />
        </div>

        <div className="ButtonRow" style={ styles.ButtonRow }>
          <Button onClick={ this.props.numberClick } flex={ 1 } label="4" />
          <Button onClick={ this.props.numberClick } flex={ 1 } label="5" />
          <Button onClick={ this.props.numberClick } flex={ 1 } label="6" />
          <Button onClick={ this.props.operatorClick } operator flex={ 1 } label="x" />
        </div>

        <div className="ButtonRow" style={ styles.ButtonRow }>
          <Button onClick={ this.props.numberClick } flex={ 1 } label="1" />
          <Button onClick={ this.props.numberClick } flex={ 1 } label="2" />
          <Button onClick={ this.props.numberClick } flex={ 1 } label="3" />
          <Button onClick={ this.props.operatorClick } operator flex={ 1 } label="+" />
        </div>

        <div className="ButtonRow" style={ styles.ButtonRow }>
          <Button onClick={ this.props.numberClick } flex={ 3.5 } label="0" />
          <Button onClick={ this.props.operatorClick } operator flex={ 1 } label="-" />
        </div>
        <div className="ButtonRow" style={ styles.ButtonRow }>
          <Button onClick={ this.props.operatorClick } operator flex={ 4 } label="=" />
        </div>
      </div>
    );
  }
}
