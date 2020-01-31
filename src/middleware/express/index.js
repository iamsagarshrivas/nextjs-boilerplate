const express = require('express')
const createStore = require('../../redux/store').default;
const { matchRoutes } = require('react-router-config')
const renderer =require('../../helper/renderer').default
const Routes = require('../../client/routes').default;

module.exports = (apiRoot, routes) => {
	const app = express()
	app.use(express.static('public'));
	app.get('*', (req, res) => {
		const store = createStore(req);
	  
		const promises = matchRoutes(Routes, req.path)
		  .map(({ route }) => {
			return route.loadData ? route.loadData(store) : null;
		  })
		  .map(promise => {
			if (promise) {
			  return new Promise((resolve, reject) => {
				promise.then(resolve).catch(resolve);
			  });
			}
		  });
	  
		Promise.all(promises).then(() => {
		  const context = {};
		  const content = renderer(req, store, context);
	  
		  if (context.url) {
			return res.redirect(301, context.url);
		  }
		  if (context.notFound) {
			res.status(404);
		  }
	  
		  res.send(content);
		});
	  });
	  
	app.use(apiRoot, routes)

	return app
}
