import type { ReactNode } from 'react';

import { DashboardSidebar } from '@/components/layout/DashboardSidebar';

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className='min-h-dvh bg-brand-bg md:flex'>
      <DashboardSidebar />
      <div className='min-w-0 flex-1'>{children}</div>
    </div>
  );
}
