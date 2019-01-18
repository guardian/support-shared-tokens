import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

import Header from './Header';

ReactDOM.render(<Header />, document.getElementById('app'));

document.querySelector('code').innerText = ReactDOMServer.renderToString(
	<Header />
);
