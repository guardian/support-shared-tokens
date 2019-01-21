const express = require('express');
const app = express();
const port = 3000;
const { readFileSync } = require('fs');

app.get('/', (req, res) =>
	res.send(
		readFileSync('ex.html', 'utf8')
			.replace('__HEAD__', readFileSync('../../dist/head.out.html', 'utf8'))
			.replace('__CSS__', readFileSync('../../dist/head.out.css', 'utf8'))
	)
);
app.use(express.static('dist'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
