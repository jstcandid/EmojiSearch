import { ChangeEventHandler } from 'react';

interface IProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export function Input({ value, onChange }: IProps) {
  return (
    <input
      className='form-control'
      placeholder='Find your emoji...'
      aria-label='Find your emoji...'
      value={value}
      onChange={onChange}
      type='text'
      aria-describedby='button-addon2'
    />
  );
}
