import { ReactNode } from 'react';

type Props = Readonly<{
  span?: number;
  children?: ReactNode;
}>;

export default function KeyboardRow({ children }: Props) {
  return (
    <div
      className="grid gap-1"
      style={{
        gridTemplateColumns: `repeat(73, minmax(0, 1fr))`,
      }}>
      {children}
    </div>
  );
}
