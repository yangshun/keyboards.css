import Image from 'next/image';
import Key from '../../Key';
import KeyboardRow from '../../KeyboardRow';
import ReactLogo from './react-logo.svg';

const WHITE = '#fff';
const PRIMARY_BLUE = 'rgb(20 158 202/1)';
const GRAY = 'rgb(35 39 47/1)';
const LIGHT_GRAY = 'rgb(52 58 70/1)';

export default function ReactKeyboard75() {
  return (
    <div
      className="flex flex-col gap-3 sm:gap-6 p-2 sm:p-4 rounded-lg w-full shadow-xl"
      style={{ backgroundColor: GRAY }}>
      <KeyboardRow>
        <Key backgroundColor={PRIMARY_BLUE} color={WHITE} letter={'Escape'} />
        <span className="col-span-4" />
        {(['F1', 'F2', 'F3', 'F4'] as const).map((character) => (
          <Key
            backgroundColor={LIGHT_GRAY}
            color={WHITE}
            key={character}
            letter={character}
          />
        ))}
        <span className="col-span-2" />
        {(['F5', 'F6', 'F7', 'F8'] as const).map((character) => (
          <Key
            backgroundColor={PRIMARY_BLUE}
            color={WHITE}
            key={character}
            letter={character}
          />
        ))}
        <span className="col-span-2" />
        {(['F9', 'F10', 'F11', 'F12'] as const).map((character) => (
          <Key
            backgroundColor={LIGHT_GRAY}
            color={WHITE}
            key={character}
            letter={character}
          />
        ))}
        <span className="col-span-1" />
        {(['PrintScreen', 'ScrollLock', 'Pause'] as const).map((character) => (
          <Key
            backgroundColor={PRIMARY_BLUE}
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
            <Key backgroundColor={WHITE} key={character} letter={character} />
          ))}
          <Key
            backgroundColor={LIGHT_GRAY}
            color={WHITE}
            letter={'Backspace'}
          />
          <span className="col-span-1" />
          {(['Insert', 'Home', 'PageUp'] as const).map((character) => (
            <Key
              backgroundColor={LIGHT_GRAY}
              color={WHITE}
              key={character}
              letter={character}
            />
          ))}
        </KeyboardRow>
        <KeyboardRow>
          <Key backgroundColor={LIGHT_GRAY} color={WHITE} letter={'Tab'} />
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
              '\\',
            ] as const
          ).map((character) => (
            <Key backgroundColor={WHITE} key={character} letter={character} />
          ))}
          <span className="col-span-1" />
          {(['Delete', 'End', 'PageDown'] as const).map((character) => (
            <Key
              backgroundColor={LIGHT_GRAY}
              color={WHITE}
              key={character}
              letter={character}
            />
          ))}
        </KeyboardRow>
        <KeyboardRow>
          <Key backgroundColor={LIGHT_GRAY} color={WHITE} letter={'CapsLock'} />
          {(
            ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'"] as const
          ).map((character) => (
            <Key backgroundColor={WHITE} key={character} letter={character} />
          ))}
          <Key backgroundColor={PRIMARY_BLUE} color={WHITE} letter="Enter" />
        </KeyboardRow>
        <KeyboardRow>
          <Key
            backgroundColor={LIGHT_GRAY}
            color={WHITE}
            letter={'LeftShift'}
          />
          {(['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'] as const).map(
            (character) => (
              <Key backgroundColor={WHITE} key={character} letter={character} />
            ),
          )}
          <Key backgroundColor={LIGHT_GRAY} color={WHITE} letter="RightShift" />
          <span className="col-span-5" />
          <Key backgroundColor={PRIMARY_BLUE} color={WHITE} letter="ArrowUp" />
        </KeyboardRow>
        <KeyboardRow>
          {(['Control', 'Meta', 'Alt'] as const).map((character) => (
            <Key
              backgroundColor={LIGHT_GRAY}
              color={WHITE}
              key={character}
              letter={character}
            />
          ))}
          <Key backgroundColor={WHITE} letter={' '}>
            <Image
              className="w-3 sm:w-6 lg:w-8"
              alt="React Logo"
              src={ReactLogo}
            />
          </Key>
          {(['Alt', 'Meta', 'Fn', 'Control'] as const).map((character) => (
            <Key
              backgroundColor={LIGHT_GRAY}
              color={WHITE}
              key={character}
              letter={character}
            />
          ))}
          <span className="col-span-1" />
          {(['ArrowLeft', 'ArrowDown', 'ArrowRight'] as const).map(
            (character) => (
              <Key
                backgroundColor={PRIMARY_BLUE}
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
