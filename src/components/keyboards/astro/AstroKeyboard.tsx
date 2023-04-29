import Image from 'next/image';
import Key from '../../Key';
import KeyboardRow from '../../KeyboardRow';
import AstroLogo from './astro-logo-dark.svg';

const ACCENT_ORANGE = '#ff7e33';
const ACCENT_PURPLE_BACKGROUND = '#2a233e';
const ACCENT_PURPLE_LIGHT = '#872de666';
const WHITE = '#fff';

export default function AstroKeyboard() {
  return (
    <div
      className="flex flex-col gap-3 sm:gap-6 p-2 sm:p-4 rounded-lg w-full shadow-xl"
      style={{ backgroundColor: ACCENT_PURPLE_BACKGROUND }}>
      <KeyboardRow>
        <Key backgroundColor={ACCENT_ORANGE} letter={'Escape'} />
        <span className="col-span-4" />
        {(['F1', 'F2', 'F3', 'F4'] as const).map((character) => (
          <Key backgroundColor={WHITE} key={character} letter={character} />
        ))}
        <span className="col-span-2" />
        {(['F5', 'F6', 'F7', 'F8'] as const).map((character) => (
          <Key backgroundColor={WHITE} key={character} letter={character} />
        ))}
        <span className="col-span-2" />
        {(['F9', 'F10', 'F11', 'F12'] as const).map((character) => (
          <Key backgroundColor={WHITE} key={character} letter={character} />
        ))}
        <span className="col-span-1" />
        {(['PrintScreen', 'ScrollLock', 'Pause'] as const).map((character) => (
          <Key
            backgroundColor={ACCENT_PURPLE_LIGHT}
            color={WHITE}
            key={character}
            letter={character}
          />
        ))}
      </KeyboardRow>
      <div className="flex flex-col gap-1">
        <KeyboardRow>
          {(
            [
              '`',
              '1',
              '2',
              '3',
              '4',
              '5',
              '6',
              '7',
              '8',
              '9',
              '0',
              '-',
              '=',
            ] as const
          ).map((character) => (
            <Key
              backgroundColor={ACCENT_PURPLE_LIGHT}
              color={WHITE}
              key={character}
              letter={character}
            />
          ))}
          <Key backgroundColor={WHITE} letter={'Backspace'} />
          <span className="col-span-1" />
          {(['Insert', 'Home', 'PageUp'] as const).map((character) => (
            <Key backgroundColor={WHITE} key={character} letter={character} />
          ))}
        </KeyboardRow>
        <KeyboardRow>
          <Key backgroundColor={WHITE} letter={'Tab'} />
          {(
            [
              'Q',
              'W',
              'E',
              'R',
              'T',
              'Y',
              'U',
              'I',
              'O',
              'P',
              '[',
              ']',
            ] as const
          ).map((character) => (
            <Key
              backgroundColor={ACCENT_PURPLE_LIGHT}
              color={WHITE}
              key={character}
              letter={character}
            />
          ))}
          <Key backgroundColor={WHITE} letter={'\\'} />
          <span className="col-span-1" />
          {(['Delete', 'End', 'PageDown'] as const).map((character) => (
            <Key backgroundColor={WHITE} key={character} letter={character} />
          ))}
        </KeyboardRow>
        <KeyboardRow>
          <Key backgroundColor={WHITE} letter={'CapsLock'} />
          {(
            ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'"] as const
          ).map((character) => (
            <Key
              backgroundColor={ACCENT_PURPLE_LIGHT}
              color={WHITE}
              key={character}
              letter={character}
            />
          ))}
          <Key backgroundColor={ACCENT_ORANGE} letter="Enter">
            {
              <Image
                className="h-2 sm:h-4 lg:h-5"
                alt="Astro Logo"
                src={AstroLogo}
              />
            }
          </Key>
        </KeyboardRow>
        <KeyboardRow>
          <Key backgroundColor={WHITE} letter={'LeftShift'} />
          {(['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'] as const).map(
            (character) => (
              <Key
                backgroundColor={ACCENT_PURPLE_LIGHT}
                color={WHITE}
                key={character}
                letter={character}
              />
            ),
          )}
          <Key backgroundColor={WHITE} letter="RightShift" />
          <span className="col-span-5" />
          <Key
            backgroundColor={ACCENT_PURPLE_LIGHT}
            color={WHITE}
            letter="ArrowUp"
          />
        </KeyboardRow>
        <KeyboardRow>
          {(['Control', 'Meta', 'Alt'] as const).map((character) => (
            <Key backgroundColor={WHITE} key={character} letter={character} />
          ))}
          <Key backgroundColor={ACCENT_ORANGE} letter={' '} />
          {(['Alt', 'Meta', 'Fn', 'Control'] as const).map((character) => (
            <Key backgroundColor={WHITE} key={character} letter={character} />
          ))}
          <span className="col-span-1" />
          {(['ArrowLeft', 'ArrowDown', 'ArrowRight'] as const).map(
            (character) => (
              <Key
                backgroundColor={ACCENT_PURPLE_LIGHT}
                color={WHITE}
                key={character}
                letter={character}
              />
            ),
          )}
        </KeyboardRow>
      </div>
    </div>
  );
}
