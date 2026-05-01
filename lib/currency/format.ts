import { labels } from '@/content/labels';

export function formatCurrency(amount: number) {
  return `${labels.common.currency.symbol}${amount}`;
}
