'use client';

import { useEffect } from 'react';

import { APP_SEARCH_FOCUS_STORAGE_KEY, APP_SEARCH_INPUT_ID } from '@/lib/navigation/constants';

export function SearchInputAutoFocus() {
  useEffect(() => {
    if (window.sessionStorage.getItem(APP_SEARCH_FOCUS_STORAGE_KEY) !== 'true') {
      return;
    }

    window.sessionStorage.removeItem(APP_SEARCH_FOCUS_STORAGE_KEY);
    window.requestAnimationFrame(() => {
      const searchInput = document.getElementById(APP_SEARCH_INPUT_ID);

      if (!(searchInput instanceof HTMLInputElement)) {
        return;
      }

      searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      searchInput.focus({ preventScroll: true });
    });
  }, []);

  return null;
}
