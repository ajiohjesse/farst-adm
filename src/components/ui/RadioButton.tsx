import { useId } from 'react';

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  children,
  id,
  ...rest
}) => {
  const generatedId = useId();
  const ID = id || generatedId;

  return (
    <div>
      <input type='radio' className='peer hidden' id={ID} {...rest} />
      <label
        htmlFor={ID}
        className='cursor-pointer rounded-xl rounded-tr-sm border bg-white px-4 py-2 transition-colors duration-200 peer-checked:border-warning-400 peer-checked:bg-warning-400'
      >
        {children}
      </label>
    </div>
  );
};
