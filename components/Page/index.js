import t from 'tachyons-js';
import Head from 'next/head';

const styles = {
  Page: {
    ...t.flex,
    ...t.justify_center,
    ...t.items_center,
    fontFamily: 'Open Sans',
    width: '100vw',
    height: '100vh',
  },
  Body: {
    margin: 0,
  }
}

export default ( props ) => (
  <div className="Page" style={ styles.Page }>
    <Head>
      <body style={ styles.Body } />
      <link type="text/css" media="screen" href="/static/tachyons.css" rel="stylesheet" />
    </Head>
    { props.children }
  </div>
)
