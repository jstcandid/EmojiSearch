import { useState } from 'react';

interface IProps {
  row: {
    title: string;
    symbol: string;
    keywords: string;
  };
}

export function EmojiRow({ row }: IProps) {
  const [mouse, setMouse] = useState(false);
  return (
    <div
      onMouseEnter={() => setMouse(true)}
      onMouseLeave={() => setMouse(false)}
      className={
        mouse
          ? 'w-50 m-auto d-flex border-top bg-success text-dark bg-opacity-10'
          : 'w-50 m-auto d-flex border-top'
      }
    >
      <p>
        {row.title} <span> </span> {row.symbol}
      </p>
    </div>
  );
}
