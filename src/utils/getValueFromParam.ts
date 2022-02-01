import { useLocation } from 'react-router';

export const getValueFromParam = (field: string): string | null => {
  const { search } = useLocation();
  return new URLSearchParams(search).get(field);
};
