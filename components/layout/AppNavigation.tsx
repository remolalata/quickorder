'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { type LucideIcon, Search, ShoppingBag, ShoppingCart, UtensilsCrossed } from 'lucide-react';

import { labels } from '@/content/labels';
import {
  APP_MENU_ROUTE,
  APP_SEARCH_FOCUS_STORAGE_KEY,
  APP_SEARCH_INPUT_ID,
  appNavigationItems,
} from '@/lib/navigation/constants';
import type { AppNavigationIcon } from '@/lib/navigation/types';

const navigationIcons = {
  menu: UtensilsCrossed,
  search: Search,
  cart: ShoppingCart,
  order: ShoppingBag,
} satisfies Record<AppNavigationIcon, LucideIcon>;

const navigationItemClassName =
  'flex w-full flex-col items-center gap-1 rounded-2xl p-4 text-xs font-bold uppercase text-slate-400 transition-colors';
const activeNavigationItemClassName = `${navigationItemClassName} rounded-3xl bg-amber-500 text-white`;

export function AppNavigation() {
  const pathname = usePathname();
  const router = useRouter();

  function focusSearchInput() {
    if (pathname !== APP_MENU_ROUTE) {
      window.sessionStorage.setItem(APP_SEARCH_FOCUS_STORAGE_KEY, 'true');
      router.push(APP_MENU_ROUTE);
      return;
    }

    const searchInput = document.getElementById(APP_SEARCH_INPUT_ID);

    if (!(searchInput instanceof HTMLInputElement)) {
      return;
    }

    searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    window.setTimeout(() => searchInput.focus({ preventScroll: true }), 350);
  }

  return (
    <>
      <div className='h-24' aria-hidden='true' />
      <nav
        className='bottom-0 z-50 fixed inset-x-0 bg-white shadow-[0_-10px_30px_rgba(15,23,42,0.12)] px-8 py-2 rounded-t-3xl overflow-hidden'
        aria-label={labels.common.navigation.ariaLabel}
      >
        <ul className='items-center grid grid-cols-4'>
          {appNavigationItems.map((item) => {
            const Icon = navigationIcons[item.icon];
            const isActive = 'href' in item && pathname === item.href;
            const itemClassName = isActive
              ? activeNavigationItemClassName
              : navigationItemClassName;
            const iconClassName = isActive ? 'text-white' : 'text-slate-400';

            return (
              <li key={item.label} className='min-w-0'>
                {'href' in item ? (
                  <Link
                    href={item.href}
                    className={itemClassName}
                    aria-current={isActive && 'page'}
                  >
                    <Icon strokeWidth={2.5} size={18} className={iconClassName} />
                    <span>{labels.common.navigation.items[item.label]}</span>
                  </Link>
                ) : (
                  <button
                    type='button'
                    className={navigationItemClassName}
                    onClick={focusSearchInput}
                  >
                    <Icon strokeWidth={2.5} size={18} className='text-slate-400' />
                    <span>{labels.common.navigation.items[item.label]}</span>
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
