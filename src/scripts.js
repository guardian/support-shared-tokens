import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Header from './Header';

console.log(ReactDOMServer.renderToString(<Header />));
