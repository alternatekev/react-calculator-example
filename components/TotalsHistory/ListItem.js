import t from 'tachyons-js';

const styles = {
  ListItem: {
    ...t.pa2,
    ...t.tr,
    borderBottom: '1px #EFEFEF solid',
    width: 155,
  }
}

export default ({ value }) => (
  <div className="ListItem" style={ styles.ListItem }>{ value }</div>
)
