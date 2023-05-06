import { ReactNode } from 'react';

type Props = Readonly<{
  span?: number;
  children?: ReactNode;
}>;

export default function KeyboardRowSixtyFive({ children }: Props) {
  return (
    <div
      className="grid gap-1"
      style={{
        gridTemplateColumns: `repeat(64, minmax(0, 1fr))`,
      }}>
      {children}
    </div>
  );
}
