import { type ComponentPropsWithoutRef, forwardRef, type ReactNode } from 'react';

type FormTextAreaClassNames = {
  root?: string;
  label?: string;
  input?: string;
  helper?: string;
  error?: string;
};

type FormTextAreaProps = ComponentPropsWithoutRef<'textarea'> & {
  label: ReactNode;
  helperText?: ReactNode;
  error?: ReactNode;
  classNames?: FormTextAreaClassNames;
};

export const FormTextArea = forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  function FormTextArea(
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
        <textarea
          {...props}
          ref={ref}
          id={inputId}
          name={name}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy || undefined}
          className={combineClassNames(
            'p-3 border border-slate-200 rounded resize-none',
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
