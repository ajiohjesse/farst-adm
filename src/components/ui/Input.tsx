import { cn } from '@/utils/cn';
import { Eye, EyeOff } from 'lucide-react';
import * as React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [isVisible, setVisible] = React.useState(false);

    if (type === 'password') {
      return (
        <div className='relative'>
          <input
            type={isVisible ? 'text' : 'password'}
            className={cn(
              'flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-2 pr-12 text-primary ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              className,
            )}
            ref={ref}
            {...props}
          />
          <button
            title='toogle password visibility'
            className='absolute right-4 top-[50%] translate-y-[-50%] text-muted'
            onClick={e => {
              e.preventDefault();
              setVisible(prev => !prev);
            }}
          >
            {isVisible ? <EyeOff /> : <Eye />}
          </button>
        </div>
      );
    }

    return (
      <input
        type={type}
        className={cn(
          'flex h-12 w-full rounded-md border border-input bg-surface-200 px-3 py-2 text-primary ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
