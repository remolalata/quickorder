import type { LucideIcon } from 'lucide-react';
import { CheckCircle2, CookingPot, ReceiptText } from 'lucide-react';

import {
  orderStatusTrackerContent,
  orderStatusTrackerOrder,
  orderStatusTrackerStyles,
} from '@/lib/order/constants';
import type {
  OrderStatusTrackerIcon,
  OrderStatusTrackerState,
  OrderStatusTrackerStep,
} from '@/lib/order/types';

const orderStatusTrackerIcons = {
  receipt: ReceiptText,
  cooking: CookingPot,
  ready: CheckCircle2,
} satisfies Record<OrderStatusTrackerIcon, LucideIcon>;

export function OrderStatusTracker() {
  const steps = getOrderStatusSteps();

  return (
    <section className='bg-white shadow-sm p-5 rounded-2xl' aria-labelledby='order-status-title'>
      <h2 id='order-status-title'>{orderStatusTrackerContent.title}</h2>
      <ol className='mt-5'>
        {steps.map((step, index) => {
          const Icon = orderStatusTrackerIcons[step.icon];
          const styles = orderStatusTrackerStyles[step.state];
          const isLastStep = index === steps.length - 1;

          return (
            <li key={step.key} className='flex gap-4'>
              <div className='flex flex-col items-center'>
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${styles.icon}`}
                >
                  <Icon size={16} strokeWidth={2.5} />
                </div>
                {!isLastStep && <span className={`h-8 w-0.5 ${styles.line}`} />}
              </div>
              <div className='pt-2'>
                <p className={`${styles.label}`}>{step.label}</p>
                <p className={`mt-0.5 text-sm ${styles.description}`}>{step.description}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function getOrderStatusSteps(): OrderStatusTrackerStep[] {
  const currentStatusIndex = orderStatusTrackerOrder.indexOf(
    orderStatusTrackerContent.currentStatus,
  );

  return orderStatusTrackerOrder.map((key, index) => {
    const content = orderStatusTrackerContent.steps[key];

    return {
      key,
      ...content,
      state: getOrderStatusState(index, currentStatusIndex),
    };
  });
}

function getOrderStatusState(index: number, currentStatusIndex: number): OrderStatusTrackerState {
  if (index < currentStatusIndex) {
    return 'complete';
  }

  if (index === currentStatusIndex) {
    return 'current';
  }

  return 'upcoming';
}
