import { Minus, Plus } from 'lucide-react';

import { labels } from '@/content/labels';

type QuantityCounterSize = 'base' | 'sm';

type QuantityCounterProps = {
  quantity?: number;
  size?: QuantityCounterSize;
  className?: string;
};

const controlButtonBaseClassName =
  'flex items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-amber-500 focus-visible:outline-offset-2';

const sizeClassNames = {
  base: {
    root: 'gap-4',
    button: 'h-8 w-8',
    icon: 18,
    quantity: 'min-w-4 text-lg',
  },
  sm: {
    root: 'gap-3',
    button: 'h-6 w-6',
    icon: 14,
    quantity: 'min-w-3 text-sm',
  },
} satisfies Record<
  QuantityCounterSize,
  {
    root: string;
    button: string;
    icon: number;
    quantity: string;
  }
>;

export function QuantityCounter({
  quantity = 1,
  size = 'base',
  className = '',
}: QuantityCounterProps) {
  const quantityLabels = labels.common.quantity;
  const classNames = sizeClassNames[size];

  return (
    <div className={`flex items-center ${classNames.root} ${className}`}>
      <button
        type='button'
        aria-label={quantityLabels.decrease}
        className={`${controlButtonBaseClassName} ${classNames.button} border-2 border-sand text-slate-900`}
      >
        <Minus size={classNames.icon} />
      </button>
      <span className={`${classNames.quantity} font-bold text-center`}>{quantity}</span>
      <button
        type='button'
        aria-label={quantityLabels.increase}
        className={`${controlButtonBaseClassName} ${classNames.button} bg-amber-500 text-amber-800`}
      >
        <Plus size={classNames.icon} />
      </button>
    </div>
  );
}
