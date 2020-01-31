import React from 'react';
import { renderRoutes } from 'react-router-config';
import { setUser } from '../redux/actions';

const App = ({ route }) => {
  return (
    <div>
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(setUser())
};
