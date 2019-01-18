module.exports = content => {
	const { path } = JSON.parse(content);
	return `
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Element from '${path}';

export default ReactDOMServer.renderToString(<Element />)
`;
};
