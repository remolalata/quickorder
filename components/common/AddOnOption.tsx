import { type ComponentPropsWithoutRef } from 'react';
import { Check } from 'lucide-react';

type AddOnOptionProps = Omit<ComponentPropsWithoutRef<'input'>, 'type'> & {
  label: string;
  price: string;
};

export function AddOnOption({ id, name, label, price, ...props }: AddOnOptionProps) {
  const inputId = id ?? name;

  return (
    <label className='flex cursor-pointer items-center justify-between gap-4 rounded-2xl bg-white p-4 shadow'>
      <span className='flex items-center gap-2'>
        <input {...props} id={inputId} name={name} type='checkbox' className='peer sr-only' />
        <span
          className='flex h-4 w-4 items-center justify-center rounded border-2 border-amber-500 text-white transition-colors peer-checked:border-amber-800 peer-checked:bg-amber-800 peer-checked:[&>svg]:opacity-100'
          aria-hidden='true'
        >
          <Check size={14} strokeWidth={3} className='opacity-0' />
        </span>
        <span>{label}</span>
      </span>
      <span className='font-semibold text-amber-600'>{price}</span>
    </label>
  );
}
