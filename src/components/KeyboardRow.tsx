import { ReactNode } from 'react';

type Props = Readonly<{
  children?: ReactNode;
  span?: number;
}>;

export default function KeyboardRow({ children, span = 73 }: Props) {
  return (
    <div
      className="grid gap-1"
      style={{
        gridTemplateColumns: `repeat(${span}, minmax(0, 1fr))`,
      }}>
      {children}
    </div>
  );
}
