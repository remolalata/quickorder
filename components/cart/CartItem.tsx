import Image from 'next/image';

import { QuantityCounter } from '@/components/common/QuantityCounter';
import type { CartItem as CartItemType } from '@/lib/cart/types';
import { formatCurrency } from '@/lib/currency/format';

type CartItemProps = {
  item: CartItemType;
  variant?: 'card' | 'summary';
};

export function CartItem({ item, variant = 'card' }: CartItemProps) {
  const isSummary = variant === 'summary';
  const rootClassName = isSummary
    ? 'flex gap-4 py-4'
    : 'flex gap-4 bg-white shadow p-4 rounded-2xl';

  return (
    <div className={rootClassName}>
      <div>
        <Image
          src={item.imageSrc}
          alt={item.imageAlt}
          width={64}
          height={64}
          className='rounded-2xl'
        />
      </div>
      <div className='flex flex-1 flex-col gap-2'>
        <h2>{item.name}</h2>
        <p className='text-slate-500 text-xs'>{item.options}</p>
        {isSummary ? (
          <p className='mt-1 font-bold text-amber-800 text-xs'>Qty {item.quantity}</p>
        ) : (
          <QuantityCounter quantity={item.quantity} size='sm' className='mt-1' />
        )}
      </div>
      <div className='ml-auto font-bold'>{formatCurrency(item.price)}</div>
    </div>
  );
}
