import Link from 'next/link';
import { Check } from 'lucide-react';

import { AppHeader } from '@/components/layout/AppHeader';
import { OrderStatusTracker } from '@/components/order/OrderStatusTracker';
import { OrderSummary } from '@/components/order/OrderSummary';
import { APP_MENU_ROUTE } from '@/lib/navigation/constants';
import { orderPageContent } from '@/lib/order/constants';
import { cartItems } from '@/mock/cart';

const orderConfirmationContent = {
  title: 'Order #A-104',
  description: 'Please proceed to the counter to pay for your order.',
};

export default function OrderPage() {
  return (
    <>
      <AppHeader showBackLink />
      <main className='p-4 py-8'>
        <div className='flex flex-col justify-center items-center mx-auto max-w-4/5 text-center'>
          <div className='flex justify-center items-center bg-amber-500 rounded-full w-20 h-20'>
            <div className='flex justify-center items-center bg-white rounded-full w-10 h-10'>
              <Check size={24} strokeWidth={3} absoluteStrokeWidth className='text-amber-500' />
            </div>
          </div>
          <h1 className='mt-6 font-bold text-3xl'>{orderConfirmationContent.title}</h1>
          <p className='mt-1 text-slate-600'>{orderConfirmationContent.description}</p>
        </div>
        <div className='mt-8'>
          <OrderStatusTracker />
        </div>
        <div className='mt-8'>
          <OrderSummary items={cartItems} />
        </div>
      </main>
      <div className='p-4'>
        <Link
          href={APP_MENU_ROUTE}
          className='block w-full rounded-2xl bg-amber-800 p-4 text-center text-white shadow'
        >
          {orderPageContent.actions.placeAnotherOrder}
        </Link>
      </div>
    </>
  );
}
