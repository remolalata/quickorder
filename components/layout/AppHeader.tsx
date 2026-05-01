import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

import { labels } from '@/content/labels';
import { APP_ORDER_ROUTE } from '@/lib/navigation/constants';

type AppHeaderProps = {
  showBackLink?: boolean;
};

export function AppHeader({ showBackLink = false }: AppHeaderProps) {
  return (
    <header className='bg-brand-bg p-4 border-slate-200 border-b'>
      <div className='flex items-center gap-3'>
        {showBackLink && (
          <Link
            href={APP_ORDER_ROUTE}
            aria-label={labels.common.navigation.backToMenu}
            className='flex justify-center items-center text-slate-900'
          >
            <ArrowLeft size={16} strokeWidth={2.5} />
          </Link>
        )}
        <div className='relative w-[clamp(8.25rem,32vw,12rem)] h-[clamp(2.25rem,7vw,3.25rem)]'>
          <Image
            src='/images/logo.png'
            alt='QuickOrder'
            fill
            sizes='(max-width: 640px) 8.25rem, 12rem'
            className='object-contain'
          />
        </div>
      </div>
    </header>
  );
}
