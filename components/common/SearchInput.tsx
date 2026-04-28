import { Search } from 'lucide-react';
import type { ComponentPropsWithoutRef } from 'react';

import { labels } from '@/content/labels';

type SearchInputProps = Omit<ComponentPropsWithoutRef<'input'>, 'type'>;

export function SearchInput({
  placeholder = labels.common.search.placeholder,
  className = '',
  ...props
}: SearchInputProps) {
  return (
    <div className='flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-5'>
      <Search className='text-slate-400' />
      <input
        {...props}
        type='text'
        placeholder={placeholder}
        className={`flex-1 text-slate-900 outline-0 placeholder:text-gray-400 ${className}`}
      />
    </div>
  );
}
