import Image from 'next/image';
import Key from '../../Key';
import KeyboardRow from '../../KeyboardRow';
import PreactLogo from './preact-logo-dark.svg';

const WHITE = '#fff';
const PREACT_PURPLE = '#6B44BD'; // Red
const BASE = 'rgb(242, 242, 242)';

export default function PreactKeyboard() {
  return (
    <div
      className="flex flex-col gap-3 sm:gap-6 p-2 sm:p-4 rounded-lg w-full shadow-xl"
      style={{ backgroundColor: BASE }}>
      <KeyboardRow>
        <Key backgroundColor={PREACT_PURPLE} color={WHITE} letter={'Escape'} />
        <span className="col-span-4" />
        {(['F1', 'F2', 'F3', 'F4'] as const).map((character) => (
          <Key
            backgroundColor={WHITE}
            color={PREACT_PURPLE}
            key={character}
            letter={character}
          />
        ))}
        <span className="col-span-2" />
        {(['F5', 'F6', 'F7', 'F8'] as const).map((character) => (
          <Key
            backgroundColor={PREACT_PURPLE}
            color={WHITE}
            key={character}
            letter={character}
          />
        ))}
        <span className="col-span-2" />
        {(['F9', 'F10', 'F11', 'F12'] as const).map((character) => (
          <Key
            backgroundColor={WHITE}
            color={PREACT_PURPLE}
            key={character}
            letter={character}
          />
        ))}
        <span className="col-span-1" />
        {(['PrintScreen', 'ScrollLock', 'Pause'] as const).map((character) => (
          <Key
            backgroundColor={PREACT_PURPLE}
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
              backgroundColor={WHITE}
              color={PREACT_PURPLE}
              key={character}
              letter={character}
            />
          ))}
          <Key
            backgroundColor={PREACT_PURPLE}
            color={WHITE}
            letter={'Backspace'}
          />
          <span className="col-span-1" />
          {(['Insert', 'Home', 'PageUp'] as const).map((character) => (
            <Key
              backgroundColor={PREACT_PURPLE}
              color={WHITE}
              key={character}
              letter={character}
            />
          ))}
        </KeyboardRow>
        <KeyboardRow>
          <Key backgroundColor={PREACT_PURPLE} color={WHITE} letter={'Tab'} />
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
            <Key
              backgroundColor={WHITE}
              color={PREACT_PURPLE}
              key={character}
              letter={character}
            />
          ))}
          <span className="col-span-1" />
          {(['Delete', 'End', 'PageDown'] as const).map((character) => (
            <Key
              backgroundColor={PREACT_PURPLE}
              color={WHITE}
              key={character}
              letter={character}
            />
          ))}
        </KeyboardRow>
        <KeyboardRow>
          <Key
            backgroundColor={PREACT_PURPLE}
            color={WHITE}
            letter={'CapsLock'}
          />
          {(
            ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'"] as const
          ).map((character) => (
            <Key
              backgroundColor={WHITE}
              color={PREACT_PURPLE}
              key={character}
              letter={character}
            />
          ))}
          <Key backgroundColor={PREACT_PURPLE} color={WHITE} letter="Enter" />
        </KeyboardRow>
        <KeyboardRow>
          <Key
            backgroundColor={PREACT_PURPLE}
            color={WHITE}
            letter={'LeftShift'}
          />
          {(['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'] as const).map(
            (character) => (
              <Key
                backgroundColor={WHITE}
                color={PREACT_PURPLE}
                key={character}
                letter={character}
              />
            ),
          )}
          <Key
            backgroundColor={PREACT_PURPLE}
            color={WHITE}
            letter="RightShift"
          />
          <span className="col-span-5" />
          <Key backgroundColor={WHITE} color={PREACT_PURPLE} letter="ArrowUp" />
        </KeyboardRow>
        <KeyboardRow>
          {(['Control', 'Meta', 'Alt'] as const).map((character) => (
            <Key
              backgroundColor={PREACT_PURPLE}
              color={WHITE}
              key={character}
              letter={character}
            />
          ))}
          <Key backgroundColor={WHITE} color={PREACT_PURPLE} letter={' '}>
            <Image
              className="h-3 sm:h-5 md:h-6 lg:h-8"
              alt="Angular Logo"
              src={PreactLogo}
            />
          </Key>
          {(['Alt', 'Meta', 'Fn', 'Control'] as const).map((character) => (
            <Key
              backgroundColor={PREACT_PURPLE}
              color={WHITE}
              key={character}
              letter={character}
            />
          ))}
          <span className="col-span-1" />
          {(['ArrowLeft', 'ArrowDown', 'ArrowRight'] as const).map(
            (character) => (
              <Key
                backgroundColor={WHITE}
                color={PREACT_PURPLE}
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
