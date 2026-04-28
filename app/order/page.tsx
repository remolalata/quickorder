import Image from 'next/image';

import { FilterChipCollection } from '@/components/common/FilterChipCollection';
import { SearchInput } from '@/components/common/SearchInput';
import { OrderStatus } from '@/components/order/OrderStatus';
import { labels } from '@/content/labels';
import { menuCategories, menuTags } from '@/mock/menu';

const menuFilters = [...menuTags, ...menuCategories] as const;

export default function OrderPage() {
  return (
    <>
      <header className='bg-brand-bg p-4 border-slate-200 border-b'>
        <div className='flex justify-between items-center'>
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
      <main className='bg-brand-bg p-4 py-8'>
        <OrderStatus status='open' />
        <div className='flex flex-col gap-2 mt-2 mb-4'>
          <h1 className='text-slate-900'>{labels.order.hero.title}</h1>
          <p className='text-slate-600'>{labels.order.hero.description}</p>
        </div>
        <SearchInput placeholder={labels.order.search.placeholder} />
        <div className='-mx-4 my-8'>
          <FilterChipCollection options={menuFilters} defaultSelected={['Best Seller']} />
        </div>
      </main>
    </>
  );
}
