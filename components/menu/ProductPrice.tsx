import { formatCurrency } from '@/lib/currency/format';

type ProductPriceProps = {
  price: number;
};

export function ProductPrice({ price }: ProductPriceProps) {
  return (
    <div className='absolute right-4 top-4 rounded-full bg-white px-4 py-1 text-sm font-bold text-amber-800'>
      {formatCurrency(price)}
    </div>
  );
}
