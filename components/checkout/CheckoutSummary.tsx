import { labels } from '@/content/labels';
import type { CheckoutSummaryTotals } from '@/lib/checkout/types';
import { formatCurrency } from '@/lib/currency/format';

type CheckoutSummaryProps = {
  totals: CheckoutSummaryTotals;
};

export function CheckoutSummary({ totals }: CheckoutSummaryProps) {
  const deliveryValue =
    totals.deliveryFee === 0 ? labels.checkout.summary.free : formatCurrency(totals.deliveryFee);

  return (
    <section className='bg-blue-50 shadow p-6 border border-slate-200 rounded-2xl'>
      <ul className='flex flex-col gap-3'>
        <CheckoutSummaryLine
          label={labels.checkout.summary.lines.subtotal}
          value={formatCurrency(totals.subtotal)}
        />
        <CheckoutSummaryLine
          label={labels.checkout.summary.lines.delivery}
          value={deliveryValue}
          {...(totals.deliveryFee === 0 ? { valueClassName: 'text-green-700' } : {})}
        />
        <CheckoutSummaryLine
          label={labels.checkout.summary.lines.total}
          value={formatCurrency(totals.total)}
          isTotal
        />
      </ul>
    </section>
  );
}

type CheckoutSummaryLineProps = {
  label: string;
  value: string;
  isTotal?: boolean;
  valueClassName?: string;
};

function CheckoutSummaryLine({
  label,
  value,
  isTotal = false,
  valueClassName,
}: CheckoutSummaryLineProps) {
  return (
    <li
      className={`flex items-center justify-between ${isTotal ? 'border-t border-slate-200 pt-3 font-bold' : ''}`}
    >
      <div>{label}</div>
      <div className={valueClassName}>{value}</div>
    </li>
  );
}
