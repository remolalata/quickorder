import { labels } from '@/content/labels';
import { FALLBACK_STATUS, statusStyles } from '@/lib/order/constants';
import type { OrderStatusLabel, OrderStatusProps, OrderStatusValue } from '@/lib/order/types';

export function OrderStatus({ status }: OrderStatusProps) {
  const statusKey = getStatusKey(status);
  const styles = statusStyles[statusKey];

  return (
    <div
      className={`inline-block rounded-full px-3 py-1.5 text-xs font-bold uppercase ${styles.badge}`}
    >
      <div className='flex items-center justify-between gap-1.5'>
        <span className={`h-1.5 w-1.5 rounded-full ${styles.dot}`} />
        {labels.order.status[statusKey]}
      </div>
    </div>
  );
}

function getStatusKey(status: string): OrderStatusLabel {
  return isStyledOrderStatus(status) ? status : FALLBACK_STATUS;
}

function isStyledOrderStatus(status: string): status is OrderStatusValue {
  return status !== FALLBACK_STATUS && Object.prototype.hasOwnProperty.call(statusStyles, status);
}
