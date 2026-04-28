type FilterChipProps = {
  isActive: boolean;
  label: string;
  onClick: () => void;
};

export function FilterChip({ isActive, label, onClick }: FilterChipProps) {
  const activeClasses = 'border-amber-600 bg-amber-600 text-white';
  const inactiveClasses = 'border-slate-100 bg-white text-slate-600';

  return (
    <button
      type='button'
      aria-pressed={isActive}
      onClick={onClick}
      className={`shrink-0 rounded-full border-2 px-6 py-3 text-sm font-bold ${isActive ? activeClasses : inactiveClasses}`}
    >
      {label}
    </button>
  );
}
