import { CartItem } from '@/components/cart/CartItem';
import { CheckoutStepper } from '@/components/checkout/CheckoutStepper';
import { CheckoutSummary } from '@/components/checkout/CheckoutSummary';
import { AppButton } from '@/components/common/AppButton';
import { FormCheckbox } from '@/components/common/FormCheckbox';
import { FormTextField } from '@/components/common/FormTextField';
import { AppHeader } from '@/components/layout/AppHeader';
import { labels } from '@/content/labels';
import { formatCurrency } from '@/lib/currency/format';
import { cartItems } from '@/mock/cart';

const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
const checkoutTotals = {
  subtotal: cartTotal,
  deliveryFee: 0,
  total: cartTotal,
};
const customerDetailsLabels = labels.checkout.customerDetails;
const submitOrderLabel = labels.checkout.actions.submitOrder.replace(
  '{total}',
  formatCurrency(cartTotal),
);

export default function CartPage() {
  return (
    <>
      <AppHeader showBackLink />
      <main className='bg-brand-bg p-4 py-8'>
        <CheckoutStepper activeStep='review' classNames={{ root: 'px-8 mb-8' }} />
        <div className='flex justify-between items-center mb-4'>
          <h1>{labels.checkout.basket.title}</h1>
          <div className='font-bold text-amber-800 text-xs'>{cartItemCount} Items</div>
        </div>
        <div className='flex flex-col gap-3 mb-8'>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className='flex flex-col gap-6 bg-white shadow mb-8 p-6 rounded-2xl'>
          <h2>{customerDetailsLabels.title}</h2>
          <div className='flex flex-col gap-5'>
            <FormTextField
              name='nickname'
              type='text'
              label={customerDetailsLabels.fields.nickname.label}
              placeholder={customerDetailsLabels.fields.nickname.placeholder}
            />
            <FormTextField
              name='mobile'
              type='text'
              label={customerDetailsLabels.fields.mobile.label}
              placeholder={customerDetailsLabels.fields.mobile.placeholder}
              helperText={customerDetailsLabels.fields.mobile.helperText}
            />
          </div>
          <div className='flex flex-col gap-3'>
            <FormCheckbox name='joinLoyalty' label={customerDetailsLabels.options.joinLoyalty} />
            <FormCheckbox name='newsletter' label={customerDetailsLabels.options.newsletter} />
          </div>
        </div>
        <CheckoutSummary totals={checkoutTotals} />
      </main>
      <div className='p-4'>
        <AppButton variant='secondary'>{submitOrderLabel}</AppButton>
      </div>
    </>
  );
}
