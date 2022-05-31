import React from 'react';
import { useTypeSelector } from '../../../redux/reduxHooks';
import { usePrompt } from '../../../utils/LeavingGuardUtils';

const RouteLeavingGuard: React.FC = () => {
  const { cart = [] } = useTypeSelector((state) => state.asideReducer);

  // usePrompt('simple message for test', cart.length > 0);

  return (
    <h1>test</h1>
  );
};

export default RouteLeavingGuard;
