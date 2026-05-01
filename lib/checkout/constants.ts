import type { CheckoutStep } from './types';

export const checkoutSteps = ['menu', 'review', 'track'] as const satisfies readonly CheckoutStep[];
