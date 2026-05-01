import { type ComponentPropsWithoutRef, forwardRef, type ReactNode } from 'react';

type FormTextFieldClassNames = {
  root?: string;
  label?: string;
  input?: string;
  helper?: string;
  error?: string;
};

type FormTextFieldProps = ComponentPropsWithoutRef<'input'> & {
  label: ReactNode;
  helperText?: ReactNode;
  error?: ReactNode;
  classNames?: FormTextFieldClassNames;
};

export const FormTextField = forwardRef<HTMLInputElement, FormTextFieldProps>(
  function FormTextField(
    {
      id,
      name,
      label,
      helperText,
      error,
      className,
      classNames,
      'aria-describedby': ariaDescribedBy,
      ...props
    },
    ref,
  ) {
    const inputId = id ?? name;
    const helperId = helperText && inputId ? `${inputId}-helper` : undefined;
    const errorId = error && inputId ? `${inputId}-error` : undefined;
    const describedBy = combineClassNames(ariaDescribedBy, helperId, errorId);

    return (
      <div className={combineClassNames('flex flex-col gap-1.5', classNames?.root)}>
        <label htmlFor={inputId} className={classNames?.label}>
          {label}
        </label>
        <input
          {...props}
          ref={ref}
          id={inputId}
          name={name}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy || undefined}
          className={combineClassNames(
            'p-3 border border-slate-200 rounded',
            className,
            classNames?.input,
          )}
        />
        {helperText && (
          <p
            id={helperId}
            className={combineClassNames('text-xs text-amber-800 italic', classNames?.helper)}
          >
            {helperText}
          </p>
        )}
        {error && (
          <p
            id={errorId}
            role='alert'
            className={combineClassNames('text-xs text-red-600', classNames?.error)}
          >
            {error}
          </p>
        )}
      </div>
    );
  },
);

function combineClassNames(...classNames: Array<string | undefined>) {
  return classNames.filter(Boolean).join(' ');
}
