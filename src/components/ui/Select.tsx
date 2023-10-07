import { useClickOutside } from '@/hooks/useClickOutside.ts';
import { cn } from '@/utils/cn';
import { ChevronDown } from 'lucide-react';
import { useRef, useState } from 'react';

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  disabled?: boolean;
  label?: string;
  placeholder: string;
  options: SelectOption[];
  onChange?: (value: string) => void;
  error?: boolean;
  message?: string;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  onChange,
  error = false,
  disabled = false,
  message,
  placeholder,
  className,
}) => {
  const [currentValue, setCurrentValue] = useState('');
  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleValueChange = (value: string) => {
    setCurrentValue(value);
  };

  const handleChange = (value: string) => {
    handleValueChange(value);
    // Call method, if it exists
    if (onChange) onChange(value);
    // Close after all tasks are finished
    handleClose();
  };

  useClickOutside(selectRef, handleClose);

  return (
    <div className='relative w-full'>
      {label && <label className='mb-1 block'>{label}</label>}

      <div className='relative' ref={selectRef}>
        <button
          type='button'
          onClick={() => setOpen(prev => !prev)}
          className={cn(
            'flex h-12 w-full items-center justify-between rounded border border-gray-300  bg-surface-200 px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
            error ? 'border-red-500' : '',
            disabled ? 'pointer-events-none cursor-not-allowed opacity-50' : '',
            className,
          )}
          disabled={disabled}
          aria-haspopup='listbox'
          aria-expanded={open}
          aria-labelledby='select-label'
        >
          <span>{currentValue !== '' ? currentValue : placeholder}</span>
          <span>
            <ChevronDown />
          </span>
        </button>

        {open && (
          <div
            className='absolute left-0 top-full z-50 mt-1 grid max-h-56 w-full gap-2 overflow-auto rounded-md border border-gray-300 bg-white p-2 shadow-md'
            role='listbox'
            aria-labelledby='select-label'
          >
            {options.map((option, index) => (
              <button
                type='button'
                onClick={() => handleChange(option.value)}
                className={cn(
                  'w-full rounded-md px-4 py-2 text-left text-primary hover:bg-neutral-100 focus:bg-primary focus:text-white focus:outline-none',
                  option.value === currentValue
                    ? 'bg-primary text-white hover:bg-primary'
                    : '',
                )}
                role='option'
                aria-selected={option.value === currentValue}
                key={index}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {message && <p className='mt-2 text-red-700'>{message}</p>}
    </div>
  );
};
