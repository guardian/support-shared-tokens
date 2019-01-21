import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../../src/Header.jsx';

ReactDOM.hydrate(<Header />, document.querySelector('x-test'));
