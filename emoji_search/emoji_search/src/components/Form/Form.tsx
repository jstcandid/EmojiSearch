import { ChangeEventHandler } from 'react';
import { Input } from '../Inputs/Input';

interface IProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export function Form({ value, onChange }: IProps) {
  return (
    <div className='input-group mb-3 m-auto w-50 my-5'>
      <Input value={value} onChange={onChange} />
    </div>
  );
}
