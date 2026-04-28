'use client';

import { useState } from 'react';

import { FilterChip } from './FilterChip';

type FilterChipCollectionProps<T extends string> = {
  options: readonly T[];
  defaultSelected?: readonly T[];
};

export function FilterChipCollection<T extends string>({
  options,
  defaultSelected = [],
}: FilterChipCollectionProps<T>) {
  const [selectedOptions, setSelectedOptions] = useState<readonly T[]>(defaultSelected);

  function toggleOption(option: T) {
    setSelectedOptions((currentOptions) => {
      if (currentOptions.includes(option)) {
        return currentOptions.filter((currentOption) => currentOption !== option);
      }

      return [...currentOptions, option];
    });
  }

  return (
    <div className='overflow-x-auto scroll-smooth [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden'>
      <div className='flex w-max flex-nowrap gap-3 px-4'>
        {options.map((option) => (
          <FilterChip
            key={option}
            label={option}
            isActive={selectedOptions.includes(option)}
            onClick={() => toggleOption(option)}
          />
        ))}
      </div>
    </div>
  );
}
