import React from 'react';
import routes, { AppRouter } from './routes';

const App:React.FC = () => (
  <AppRouter routes={routes} />
);

export default App;
