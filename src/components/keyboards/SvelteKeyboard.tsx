import Key from '../Key';
import KeyboardRow from '../KeyboardRow';

const LIGHT_GRAY = 'rgb(230, 233, 236)';
const ACCENT_ORANGE = '#ff4700';
const ACCENT_GRAY = '#676778';
const ACCENT_BLUE = '#40b3ff';
const WHITE = '#fff';

export default function AngularKeyboard() {
  return (
    <div
      className="flex flex-col gap-3 sm:gap-6 p-2 sm:p-4 rounded-lg w-full shadow-xl"
      style={{ backgroundColor: LIGHT_GRAY }}>
      <KeyboardRow>
        <Key backgroundColor={ACCENT_BLUE} color={WHITE} letter={'Escape'} />
        <span className="col-span-4" />
        {(['F1', 'F2', 'F3', 'F4'] as const).map((character) => (
          <Key
            backgroundColor={WHITE}
            color={ACCENT_GRAY}
            key={character}
            letter={character}
          />
        ))}
        <span className="col-span-2" />
        {(['F5', 'F6', 'F7', 'F8'] as const).map((character) => (
          <Key
            backgroundColor={ACCENT_GRAY}
            color={WHITE}
            key={character}
            letter={character}
          />
        ))}
        <span className="col-span-2" />
        {(['F9', 'F10', 'F11', 'F12'] as const).map((character) => (
          <Key
            backgroundColor={WHITE}
            color={ACCENT_GRAY}
            key={character}
            letter={character}
          />
        ))}
        <span className="col-span-1" />
        {(['PrintScreen', 'ScrollLock', 'Pause'] as const).map((character) => (
          <Key
            backgroundColor={ACCENT_ORANGE}
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
              color={ACCENT_GRAY}
              key={character}
              letter={character}
            />
          ))}
          <Key
            backgroundColor={ACCENT_GRAY}
            color={WHITE}
            letter={'Backspace'}
          />
          <span className="col-span-1" />
          {(['Insert', 'Home', 'PageUp'] as const).map((character) => (
            <Key
              backgroundColor={ACCENT_ORANGE}
              color={WHITE}
              key={character}
              letter={character}
            />
          ))}
        </KeyboardRow>
        <KeyboardRow>
          <Key backgroundColor={ACCENT_ORANGE} color={WHITE} letter={'Tab'} />
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
              color={ACCENT_GRAY}
              key={character}
              letter={character}
            />
          ))}
          <span className="col-span-1" />
          {(['Delete', 'End', 'PageDown'] as const).map((character) => (
            <Key
              backgroundColor={ACCENT_ORANGE}
              color={WHITE}
              key={character}
              letter={character}
            />
          ))}
        </KeyboardRow>
        <KeyboardRow>
          <Key
            backgroundColor={ACCENT_ORANGE}
            color={WHITE}
            letter={'CapsLock'}
          />
          {(
            ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'"] as const
          ).map((character) => (
            <Key
              backgroundColor={WHITE}
              color={ACCENT_GRAY}
              key={character}
              letter={character}
            />
          ))}
          <Key backgroundColor={ACCENT_BLUE} color={WHITE} letter="Enter" />
        </KeyboardRow>
        <KeyboardRow>
          <Key
            backgroundColor={ACCENT_ORANGE}
            color={WHITE}
            letter={'LeftShift'}
          />
          {(['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'] as const).map(
            (character) => (
              <Key
                backgroundColor={WHITE}
                color={ACCENT_GRAY}
                key={character}
                letter={character}
              />
            ),
          )}
          <Key
            backgroundColor={ACCENT_GRAY}
            color={WHITE}
            letter="RightShift"
          />
          <span className="col-span-5" />
          <Key backgroundColor={WHITE} color={ACCENT_ORANGE} letter="ArrowUp" />
        </KeyboardRow>
        <KeyboardRow>
          {(['Control', 'Meta', 'Alt'] as const).map((character) => (
            <Key
              backgroundColor={ACCENT_ORANGE}
              color={WHITE}
              key={character}
              letter={character}
            />
          ))}
          <Key backgroundColor={WHITE} color={ACCENT_ORANGE} letter={' '} />
          {(['Alt', 'Meta', 'Fn', 'Control'] as const).map((character) => (
            <Key
              backgroundColor={ACCENT_GRAY}
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
                color={ACCENT_GRAY}
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
