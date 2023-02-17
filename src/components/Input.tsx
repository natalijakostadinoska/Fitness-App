import { ChangeEvent, FunctionComponent } from 'react';
import { Icon, IconName } from './Icon';

type InputProps = {
  value: string;
  onChange: (value: string) => unknown;
  icon?: IconName;
  placeholder?: string;
};

export const Input = ({ value, onChange, icon, placeholder }: InputProps) => {
  return (
    <>
      <div className="w-full h-fit relative">
        <input
          className="bg-gray-100 text-black border-0 py-2 w-full pl-10 rounded-3xl focus:outline-1 focus:outline focus:outline-blue-200 placeholder:text-black drop-shadow-sm"
          value={value}
          type="text"
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
        />
        {icon && (
          <div className="absolute left-2 top-0 bottom-0 h-full flex items-center">
            <Icon className='h-6 w-6' name={icon} />
          </div>
        )}
      </div>
    </>
  );
};
