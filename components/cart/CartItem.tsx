import Image from 'next/image';

import { QuantityCounter } from '@/components/common/QuantityCounter';
import type { CartItem as CartItemType } from '@/lib/cart/types';
import { formatCurrency } from '@/lib/currency/format';

type CartItemProps = {
  item: CartItemType;
};

export function CartItem({ item }: CartItemProps) {
  return (
    <div className='flex gap-4 bg-white shadow p-4 rounded-2xl'>
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
        <QuantityCounter quantity={item.quantity} size='sm' className='mt-1' />
      </div>
      <div className='ml-auto font-bold'>{formatCurrency(item.price)}</div>
    </div>
  );
}
