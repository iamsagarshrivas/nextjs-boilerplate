import React, {Fragment } from 'react';
import { renderRoutes } from 'react-router-config';
import { setUser } from '../redux/actions';

const App = (props) => {
	const { route } = props;
	console.log(props);
  return (
    <Fragment>
		App component
      {renderRoutes(route.routes)}
    </Fragment>
  );
};

export default {
  component: App
};
