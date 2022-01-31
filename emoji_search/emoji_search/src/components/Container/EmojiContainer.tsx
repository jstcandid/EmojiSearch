import { EmojiRow } from '../Item/EmojiRow';

interface IProps {
  items: [
    {
      title: string;
      symbol: string;
      keywords: string;
    }
  ];
}

export function EmojiContainer({ items }: IProps) {
  return items.map((item) => {
    return <EmojiRow row={item} />;
  });
}
