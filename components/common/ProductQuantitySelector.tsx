import { labels } from '@/content/labels';

import { QuantityCounter } from './QuantityCounter';

type ProductQuantitySelectorProps = {
  className?: string;
};

export function ProductQuantitySelector({ className = '' }: ProductQuantitySelectorProps) {
  const quantityLabels = labels.common.quantity;

  return (
    <div
      className={`flex justify-between items-center gap-4 bg-white shadow p-5 rounded-2xl ${className}`}
    >
      <div className='font-bold'>{quantityLabels.label}</div>
      <QuantityCounter />
    </div>
  );
}
