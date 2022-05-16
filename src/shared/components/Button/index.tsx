import classNames from 'classnames';
import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'flat' | 'icon' | 'secondary';
  type?: 'button' | 'submit';
  text?: string;
  iconStart?: ReactNode;
}

export function Button({
  variant, text, iconStart, ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={
      classNames({
        'min-w-buttton bg-brand-500 px-4 py-2 rounded text-white hover:saturate-150 duration-300 active:saturate-50 active:shadow-inner': true,
        'flex gap-1 items-center flex-row-reverse': iconStart,
        [rest.className || '']: rest.className,
        'p-0 min-w-0': variant === 'icon',
        'bg-transparent border-light-200 border-2 text-light-400 hover:bg-light-200': variant === 'secondary',
      })
    }

    >
      {text}
      {iconStart && iconStart}
    </button>
  );
}

Button.defaultProps = {
  iconStart: null,
  variant: 'flat',
  type: 'button',
  text: '',
};
