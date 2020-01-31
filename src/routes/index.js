var router = require('express').Router();

router.get('/some', (req, res) => {
	// const content = renderToString(<Home />);
	// res.send(content);

	res.json({aa:'working'})
})

module.exports = router; 