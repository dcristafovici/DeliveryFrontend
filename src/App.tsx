import React, { useEffect } from 'react';
import ValidationToken from './components/ValidationToken';
import routes, { AppRouter } from './routes';
import { uniqueSessionID } from './utils/uniqueSessionID';

const App:React.FC = () => {
  useEffect(() => {
    uniqueSessionID();
  }, []);

  return (
    <>
      <ValidationToken />
      <AppRouter routes={routes} />
    </>
  );
};

export default App;
