import { labels } from '@/content/labels';
import { checkoutSteps } from '@/lib/checkout/constants';
import type { CheckoutStepperProps } from '@/lib/checkout/types';

export function CheckoutStepper({ activeStep, classNames }: CheckoutStepperProps) {
  const activeStepIndex = checkoutSteps.findIndex((step) => step === activeStep);

  return (
    <ol className={combineClassNames('flex items-center', classNames?.root)}>
      {checkoutSteps.map((step, index) => {
        const isActive = step === activeStep;
        const isCompleted = index < activeStepIndex;
        const stateClassNames = getStepStateClassNames(isActive, isCompleted);

        return (
          <li
            key={step}
            className={combineClassNames(
              'flex flex-1 last:flex-none items-center',
              classNames?.item,
            )}
          >
            <div
              aria-current={isActive ? 'step' : undefined}
              className={combineClassNames('flex items-center gap-1.5', classNames?.step)}
            >
              <span
                className={combineClassNames(
                  'box-border flex justify-center items-center border rounded-full w-6 h-6 text-[10px]',
                  stateClassNames.number,
                  classNames?.number,
                )}
              >
                {index + 1}
              </span>
              <span
                className={combineClassNames(
                  'font-medium text-xs letters tracking-wider',
                  stateClassNames.label,
                  classNames?.label,
                )}
              >
                {labels.checkout.steps[step]}
              </span>
            </div>
            {index < checkoutSteps.length - 1 && (
              <div
                className={combineClassNames(
                  'flex-1 mx-4 h-px',
                  stateClassNames.connector,
                  classNames?.connector,
                )}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}

function combineClassNames(...classNames: Array<string | undefined>) {
  return classNames.filter(Boolean).join(' ');
}

function getStepStateClassNames(isActive: boolean, isCompleted: boolean) {
  if (isActive) {
    return {
      number: 'border-amber-800 bg-amber-800 text-white border-amber-800',
      label: 'text-amber-800',
      connector: 'bg-sand',
    };
  }

  if (isCompleted) {
    return {
      number: 'border-amber-500 bg-amber-500 text-white',
      label: 'text-slate-900',
      connector: 'bg-amber-500',
    };
  }

  return {
    number: 'border-sand text-slate-500',
    label: 'text-slate-500',
    connector: 'bg-sand',
  };
}
