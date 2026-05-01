import { type ButtonHTMLAttributes, type ReactNode } from 'react';

type AppButtonVariant = 'primary' | 'secondary';

type AppButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: AppButtonVariant;
};

const variantClassNames = {
  primary: 'bg-amber-500',
  secondary: 'bg-amber-800',
} satisfies Record<AppButtonVariant, string>;

export function AppButton({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}: AppButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={`w-full rounded-2xl p-4 text-white shadow ${variantClassNames[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
