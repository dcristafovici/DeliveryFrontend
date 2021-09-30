import { useEffect } from 'react';

export const useOutsideEvent = (ref:any, callback:any) => {
  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback, ref]);
};
