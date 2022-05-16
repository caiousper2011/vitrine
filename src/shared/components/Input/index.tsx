import classNames from 'classnames';
import { EventHandler, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  label: string;
}

export function Input({
  label, ...rest
}: InputProps) {
  return (
    <label className="flex flex-col gap-1 text-light-400">
      <span>{label}</span>
      <input
        {...rest}
        type="text"
        className={
        classNames({
          'h-12 rounded  font-medium text-light-900 bg-light-100 px-4': true,
          [String(rest.className)]: rest.className,
        })
      }
      />
    </label>
  );
}
