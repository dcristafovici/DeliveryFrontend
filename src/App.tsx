import React from 'react';
import UserIsValid from './components/UserIsValid';
import routes, { AppRouter } from './routes';

const App:React.FC = () => (
  <>
    <UserIsValid />
    <AppRouter routes={routes} />
  </>
);

export default App;
