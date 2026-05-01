import type { labels } from '@/content/labels';

export type CheckoutStep = keyof typeof labels.checkout.steps;

export type CheckoutStepperClassNames = {
  root?: string;
  item?: string;
  step?: string;
  number?: string;
  label?: string;
  connector?: string;
};

export type CheckoutStepperProps = {
  activeStep: CheckoutStep;
  classNames?: CheckoutStepperClassNames;
};

export type CheckoutSummaryTotals = {
  subtotal: number;
  deliveryFee: number;
  total: number;
};
