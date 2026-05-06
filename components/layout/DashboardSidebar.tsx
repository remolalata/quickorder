'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  type LucideIcon,
  MenuSquare,
  Settings,
  ShoppingBag,
  Store,
  UsersRound,
} from 'lucide-react';

import { labels } from '@/content/labels';
import { dashboardNavigationItems } from '@/lib/navigation/constants';
import type { DashboardNavigationIcon } from '@/lib/navigation/types';

const dashboardNavigationIcons = {
  dashboard: LayoutDashboard,
  orders: ShoppingBag,
  menu: MenuSquare,
  customer: UsersRound,
  settings: Settings,
} satisfies Record<DashboardNavigationIcon, LucideIcon>;

const navigationItemClassName =
  'flex items-center gap-3 rounded-lg px-3 py-2.5 font-bold text-base text-slate-500 transition-colors hover:bg-amber-50 hover:text-amber-900';
const activeNavigationItemClassName = `${navigationItemClassName} bg-amber-100 text-amber-900`;

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className='border-slate-200 border-b bg-white md:min-h-dvh md:w-72 md:border-r md:border-b-0'>
      <div className='flex gap-4 p-4 md:flex-col md:gap-8 md:p-6'>
        <div className='flex min-w-48 items-center gap-3'>
          <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-500 text-white'>
            <Store size={22} strokeWidth={2.5} />
          </div>
          <div className='min-w-0'>
            <h2 className='truncate font-bold text-slate-950'>{labels.dashboard.business.name}</h2>
            <p className='mt-0.5 font-bold text-[0.6875rem] text-amber-800 uppercase'>
              {labels.dashboard.business.portalLabel}
            </p>
          </div>
        </div>

        <nav
          className='-mx-4 flex min-w-0 flex-1 gap-1 overflow-x-auto px-4 md:mx-0 md:flex-col md:overflow-visible md:px-0'
          aria-label={labels.dashboard.navigation.ariaLabel}
        >
          {dashboardNavigationItems.map((item) => {
            const Icon = dashboardNavigationIcons[item.icon];
            const isActive = pathname === item.href;
            const itemClassName = isActive
              ? activeNavigationItemClassName
              : navigationItemClassName;
            const iconClassName = isActive ? 'text-amber-800' : 'text-slate-400';

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`${itemClassName} shrink-0`}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon size={18} strokeWidth={2.5} className={iconClassName} />
                <span>{labels.dashboard.navigation.items[item.label]}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
