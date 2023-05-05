import clsx from 'clsx';
import { ReactNode } from 'react';
import {
  ArrowBigUpIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CornerDownLeftIcon,
  DeleteIcon,
} from 'lucide-react';

type Props = Readonly<{
  className?: string;
  children?: ReactNode;
  backgroundColor?: string;
  color?: string;
  letter: KeyboardKey;
}>;

type KeyboardKey =
  | 'Escape'
  | 'F1'
  | 'F2'
  | 'F3'
  | 'F4'
  | 'F5'
  | 'F6'
  | 'F7'
  | 'F8'
  | 'F9'
  | 'F10'
  | 'F11'
  | 'F12'
  | 'PrintScreen'
  | 'ScrollLock'
  | 'Pause'
  | '`'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '0'
  | '-'
  | '='
  | 'Backspace'
  | 'Insert'
  | 'Home'
  | 'PageUp'
  | 'Tab'
  | 'Q'
  | 'W'
  | 'E'
  | 'R'
  | 'T'
  | 'Y'
  | 'U'
  | 'I'
  | 'O'
  | 'P'
  | '['
  | ']'
  | '\\'
  | 'Delete'
  | 'End'
  | 'PageDown'
  | 'CapsLock'
  | 'A'
  | 'S'
  | 'D'
  | 'F'
  | 'G'
  | 'H'
  | 'J'
  | 'K'
  | 'L'
  | ';'
  | "'"
  | 'Enter'
  | 'LeftShift'
  | 'Z'
  | 'X'
  | 'C'
  | 'V'
  | 'B'
  | 'N'
  | 'M'
  | ','
  | '.'
  | '/'
  | 'RightShift'
  | 'Control'
  | 'Meta'
  | 'Alt'
  | ' '
  | 'Fn'
  | 'ArrowUp'
  | 'ArrowLeft'
  | 'ArrowDown'
  | 'ArrowRight';

function keyAspectRatio(letter: KeyboardKey): number {
  switch (letter) {
    case 'Tab':
    case '\\':
    case 'Meta':
    case 'Control':
      return 1.5;
    case 'Backspace':
    case 'Enter':
    case 'CapsLock':
      return 2;
    case 'LeftShift':
    case 'RightShift':
      return 2.5;
    case ' ':
      return 6;
    default:
      return 1;
  }
}

function keyLabel(letter: KeyboardKey):
  | Readonly<{
      type: 'single';
      center: ReactNode;
    }>
  | Readonly<{
      type: 'double';
      top: string;
      bottom: string;
    }> {
  switch (letter) {
    case 'Escape':
      return {
        type: 'single',
        center: (
          <span className="text-[4px] sm:text-[5px] md:text-xs">Esc</span>
        ),
      };
    case 'PrintScreen':
      return {
        type: 'single',
        center: (
          <span className="text-[4px] sm:text-[5px] md:text-[10px]">Print</span>
        ),
      };
    case 'ScrollLock':
      return {
        type: 'single',
        center: (
          <span className="text-[4px] sm:text-[5px] md:text-[10px]">
            Scroll
          </span>
        ),
      };
    case 'Pause':
      return {
        type: 'single',
        center: (
          <span className="text-[4px] sm:text-[5px] md:text-[10px]">Pause</span>
        ),
      };
    case '`':
      return { type: 'double', top: '~', bottom: '`' };
    case '1':
      return { type: 'double', top: '!', bottom: '1' };
    case '2':
      return { type: 'double', top: '@', bottom: '2' };
    case '3':
      return { type: 'double', top: '#', bottom: '3' };
    case '4':
      return { type: 'double', top: '$', bottom: '4' };
    case '5':
      return { type: 'double', top: '%', bottom: '5' };
    case '6':
      return { type: 'double', top: '^', bottom: '6' };
    case '7':
      return { type: 'double', top: '&', bottom: '7' };
    case '8':
      return { type: 'double', top: '*', bottom: '8' };
    case '9':
      return { type: 'double', top: '(', bottom: '9' };
    case '0':
      return { type: 'double', top: ')', bottom: '0' };
    case '-':
      return { type: 'double', top: '_', bottom: '-' };
    case '=':
      return { type: 'double', top: '+', bottom: '=' };
    case '[':
      return { type: 'double', top: '{', bottom: '[' };
    case ']':
      return { type: 'double', top: '}', bottom: ']' };
    case '\\':
      return { type: 'double', top: '|', bottom: '\\' };
    case ';':
      return { type: 'double', top: ':', bottom: ';' };
    case "'":
      return { type: 'double', top: '"', bottom: "'" };
    case ',':
      return { type: 'double', top: '<', bottom: ',' };
    case '.':
      return { type: 'double', top: '>', bottom: '.' };
    case '/':
      return { type: 'double', top: '?', bottom: '/' };
    case 'Control':
      return {
        type: 'single',
        center: (
          <span className="text-[4px] sm:text-[5px] md:text-xs">Ctrl</span>
        ),
      };
    case 'PageUp':
      return {
        type: 'single',
        center: (
          <span className="text-[4px] sm:text-[5px] md:text-[10px]">Pg Up</span>
        ),
      };
    case 'PageDown':
      return {
        type: 'single',
        center: (
          <span className="text-[4px] sm:text-[5px] md:text-[10px]">Pg Dn</span>
        ),
      };
    case 'Delete':
      return {
        type: 'single',
        center: (
          <span className="text-[4px] sm:text-[5px] md:text-[10px]">Del</span>
        ),
      };
    case 'Insert':
      return {
        type: 'single',
        center: (
          <span className="text-[4px] sm:text-[5px] md:text-[10px]">
            Insert
          </span>
        ),
      };
    case 'Home':
    case 'End':
      return {
        type: 'single',
        center: (
          <span className="text-[4px] sm:text-[5px] md:text-[10px]">
            {letter}
          </span>
        ),
      };
    case 'Delete':
    case 'Meta':
    case 'Alt':
    case 'F1':
    case 'F2':
    case 'F3':
    case 'F4':
    case 'F5':
    case 'F6':
    case 'F7':
    case 'F8':
    case 'F9':
    case 'F10':
    case 'F11':
    case 'F12':
    case 'Tab':
    case 'Fn':
      return {
        type: 'single',
        center: (
          <span className="text-[4px] sm:text-[5px] md:text-xs">{letter}</span>
        ),
      };
    case 'CapsLock':
      return {
        type: 'single',
        center: (
          <span className="text-[4px] sm:text-[5px] md:text-xs">Caps Lock</span>
        ),
      };
    case 'LeftShift':
    case 'RightShift':
      return {
        type: 'single',
        center: (
          <span className="ml-2 sm:ml-4 flex gap-1 items-center w-full justify-start">
            <ArrowBigUpIcon className="h-2 w-2 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
            <span className="text-[4px] sm:text-[5px] md:text-xs">Shift</span>
          </span>
        ),
      };
    case 'ArrowUp':
      return {
        type: 'single',
        center: (
          <ArrowUpIcon className="h-2 w-2 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
        ),
      };
    case 'ArrowLeft':
      return {
        type: 'single',
        center: (
          <ArrowLeftIcon className="h-2 w-2 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
        ),
      };
    case 'ArrowDown':
      return {
        type: 'single',
        center: (
          <ArrowDownIcon className="h-2 w-2 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
        ),
      };
    case 'ArrowRight':
      return {
        type: 'single',
        center: (
          <ArrowRightIcon className="h-2 w-2 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
        ),
      };
    case 'Enter':
      return {
        type: 'single',
        center: (
          <CornerDownLeftIcon className="h-2 w-2 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
        ),
      };
    case 'Backspace':
      return {
        type: 'single',
        center: (
          <DeleteIcon className="h-2 w-2 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
        ),
      };
    default:
      return {
        type: 'single',
        center: (
          <span className="text-[6px] sm:text-[7px] md:text-xs">{letter}</span>
        ),
      };
  }
}

export default function Key({
  backgroundColor,
  children,
  color,
  className,
  letter,
}: Props) {
  const gridColumnSpan = keyAspectRatio(letter);
  const label = keyLabel(letter);

  return (
    <span
      className={clsx(
        'select-none overflow-hidden rounded-sm sm:rounded-md grow md:p-1 lg:text-base flex items-center justify-center border-slate-200 font-bold shrink-0',
        gridColumnSpan === 1 && 'aspect-square',
        className,
      )}
      style={{
        backgroundColor,
        color,
        gridColumn: `span ${gridColumnSpan * 4} / span ${gridColumnSpan * 4}`,
      }}>
      {(() => {
        if (children) {
          return children;
        }

        if (label.type === 'single') {
          return label.center;
        }

        return (
          <div className="flex flex-col justify-between">
            <span className="text-[4px] sm:text-[5px] md:text-xs xl:text-sm">
              {label.top}
            </span>
            <span className="text-[4px] sm:text-[5px] md:text-xs xl:text-sm">
              {label.bottom}
            </span>
          </div>
        );
      })()}
    </span>
  );
}
