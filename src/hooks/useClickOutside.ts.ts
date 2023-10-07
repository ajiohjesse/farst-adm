import { RefObject, useEffect } from 'react';

type ClickEvent = MouseEvent | TouchEvent;

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: ClickEvent) => void,
  exceptions?: RefObject<HTMLElement>[],
) => {
  useEffect(() => {
    const listener = (event: ClickEvent) => {
      const element = ref.current;

      if (!element || element.contains(event.target as Node)) {
        return;
      }

      //except some dom elements from this hook
      let isException = false;

      exceptions?.some(exceptionRef => {
        if (exceptionRef.current?.contains(event.target as Node)) {
          isException = true;
        }

        return exceptionRef;
      });

      if (isException) return;

      handler(event); // Call the handler only if the click is outside of the element passed.
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, exceptions]); // Reload only if ref or handler changes
};
