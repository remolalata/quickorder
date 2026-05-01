import { type ComponentPropsWithoutRef, forwardRef, type ReactNode } from 'react';
import { Check } from 'lucide-react';

type FormCheckboxProps = Omit<ComponentPropsWithoutRef<'input'>, 'type'> & {
  label: ReactNode;
};

export const FormCheckbox = forwardRef<HTMLInputElement, FormCheckboxProps>(function FormCheckbox(
  { id, name, label, className, ...props },
  ref,
) {
  const inputId = id ?? name;

  return (
    <label className='flex items-center gap-2'>
      <input
        {...props}
        ref={ref}
        id={inputId}
        name={name}
        type='checkbox'
        className='sr-only peer'
      />
      <span
        className={`flex h-4 w-4 items-center justify-center rounded border-2 border-amber-500 text-white transition-colors peer-checked:border-amber-800 peer-checked:bg-amber-800 peer-checked:[&>svg]:opacity-100 ${className ?? ''}`}
        aria-hidden='true'
      >
        <Check size={14} strokeWidth={3} className='opacity-0' />
      </span>
      <span>{label}</span>
    </label>
  );
});
