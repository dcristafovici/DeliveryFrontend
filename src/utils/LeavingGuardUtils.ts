import { useContext, useEffect, useCallback } from 'react';
import { UNSAFE_NavigationContext as NavigationContext } from 'react-router-dom';

export function useBlocker(blocker:any, when = true) {
  const { navigator }: any = useContext(NavigationContext);
  useEffect(() => {
    if (!when) return;
    const unblock = navigator.block((tx:any) => {
      const autoUnblockingTx = {
        ...tx,
        retry() {
          // Automatically unblock the transition so it can play all the way
          // through before retrying it. TODO: Figure out how to re-enable
          // this block if the transition is cancelled for some reason.
          unblock();
          tx.retry();
        },
      };
      blocker(autoUnblockingTx);
    });

    // eslint-disable-next-line consistent-return
    return unblock;
  }, [navigator, blocker, when]);
}

export function usePrompt(message:any, when = true) {
  const blocker = useCallback(
    (tx) => {
      // eslint-disable-next-line no-alert
      if (window.confirm(message)) tx.retry();
    },
    [message],
  );

  useBlocker(blocker, when);
}
