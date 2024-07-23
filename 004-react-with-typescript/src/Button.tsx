import type { ComponentProps } from 'react';

type ButtonProps = {
  outline: boolean;
} & ComponentProps<'button'>;

export default function Button({ outline, ...props }: ButtonProps) {
  return <button {...props} style={{ border: outline ? '1px solid red' : 'none' }}></button>;
}
