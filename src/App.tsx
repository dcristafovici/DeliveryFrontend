import React from 'react';
import routes, { AppRouter } from './routes';
import checkTokenValidate from './utils';

const App:React.FC = () => {
  checkTokenValidate();
  return (
    <AppRouter routes={routes} />
  );
};

export default App;
