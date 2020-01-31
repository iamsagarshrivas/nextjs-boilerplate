var router = require('express').Router();
const React = require('react');
const { renderToString } =require('react-dom/server')
const Home = require('../client/components/app');

router.get('/', (req, res) => {
	const content = renderToString(<Home />);
	res.send(content);

})

module.exports = router; 