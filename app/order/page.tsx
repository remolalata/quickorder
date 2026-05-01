import { FilterChipCollection } from '@/components/common/FilterChipCollection';
import { SearchInput } from '@/components/common/SearchInput';
import { SearchInputAutoFocus } from '@/components/common/SearchInputAutoFocus';
import { AppHeader } from '@/components/layout/AppHeader';
import { AppNavigation } from '@/components/layout/AppNavigation';
import { MenuProductCard } from '@/components/menu/MenuProductCard';
import { OrderStatus } from '@/components/order/OrderStatus';
import { labels } from '@/content/labels';
import { APP_SEARCH_INPUT_ID } from '@/lib/navigation/constants';
import { menuCategories, menuProducts, menuTags } from '@/mock/menu';

const menuFilters = [...menuTags, ...menuCategories] as const;

export default function OrderPage() {
  return (
    <>
      <AppHeader />
      <main className='bg-brand-bg p-4 py-8'>
        <OrderStatus status='open' />
        <div className='flex flex-col gap-2 mt-2 mb-4'>
          <h1 className='text-slate-900'>{labels.order.hero.title}</h1>
          <p className='text-slate-600'>{labels.order.hero.description}</p>
        </div>
        <SearchInput id={APP_SEARCH_INPUT_ID} placeholder={labels.order.search.placeholder} />
        <SearchInputAutoFocus />
        <div className='-mx-4 my-8'>
          <FilterChipCollection options={menuFilters} defaultSelected={['Best Seller']} />
        </div>
        <div>
          <h2 className='mb-6 text-slate-900'>{labels.order.sections.topPicks}</h2>
          <div className='flex flex-col gap-6'>
            {menuProducts.map((product) => (
              <MenuProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className='mt-12 mb-5'>
          <h2 className='text-slate-400 text-center'>No app. No login. Order as guest</h2>
        </div>
      </main>
      <AppNavigation />
    </>
  );
}
