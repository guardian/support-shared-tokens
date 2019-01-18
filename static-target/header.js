import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { writeFileSync } from 'fs';

import { Header } from '../src/Header.jsx';

const rendered = ReactDOMServer.renderToString(<Header />);

writeFileSync('./dist/header.out.html', rendered, 'ascii');
