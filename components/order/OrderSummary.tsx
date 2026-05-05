import { CartItem } from '@/components/cart/CartItem';
import { orderSummaryContent } from '@/lib/order/constants';
import type { OrderSummaryProps } from '@/lib/order/types';

export function OrderSummary({ items }: OrderSummaryProps) {
  return (
    <section className='bg-white shadow-sm p-5 rounded-2xl' aria-labelledby='order-summary'>
      <h2 id='order-summary'>{orderSummaryContent.title}</h2>
      <div className='mt-2 divide-y divide-slate-100'>
        {items.map((item) => (
          <CartItem key={item.id} item={item} variant='summary' />
        ))}
      </div>
    </section>
  );
}
