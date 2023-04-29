import Key from '../Key';
import KeyboardRow from '../KeyboardRow';

const WHITE = '#fff';
const ANGULAR_RED = '#dd0031'; // Red
const ANGULAR_BLUE = 'rgb(25, 118, 210)'; // Blue
const BASE = 'rgb(242, 242, 242)';

export default function AngularKeyboard() {
  return (
    <div
      className="flex flex-col gap-3 sm:gap-6 p-2 sm:p-4 rounded-lg w-full shadow-xl"
      style={{ backgroundColor: BASE }}>
      <KeyboardRow>
        <Key backgroundColor={ANGULAR_BLUE} color={WHITE} letter={'Escape'} />
        <span className="col-span-4" />
        {(['F1', 'F2', 'F3', 'F4'] as const).map((character) => (
          <Key
            backgroundColor={WHITE}
            color={ANGULAR_RED}
            key={character}
            letter={character}
          />
        ))}
        <span className="col-span-2" />
        {(['F5', 'F6', 'F7', 'F8'] as const).map((character) => (
          <Key
            backgroundColor={ANGULAR_BLUE}
            color={WHITE}
            key={character}
            letter={character}
          />
        ))}
        <span className="col-span-2" />
        {(['F9', 'F10', 'F11', 'F12'] as const).map((character) => (
          <Key
            backgroundColor={WHITE}
            color={ANGULAR_RED}
            key={character}
            letter={character}
          />
        ))}
        <span className="col-span-1" />
        {(['PrintScreen', 'ScrollLock', 'Pause'] as const).map((character) => (
          <Key
            backgroundColor={ANGULAR_RED}
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
              color={ANGULAR_RED}
              key={character}
              letter={character}
            />
          ))}
          <Key
            backgroundColor={ANGULAR_BLUE}
            color={WHITE}
            letter={'Backspace'}
          />
          <span className="col-span-1" />
          {(['Insert', 'Home', 'PageUp'] as const).map((character) => (
            <Key
              backgroundColor={ANGULAR_RED}
              color={WHITE}
              key={character}
              letter={character}
            />
          ))}
        </KeyboardRow>
        <KeyboardRow>
          <Key backgroundColor={ANGULAR_RED} color={WHITE} letter={'Tab'} />
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
              color={ANGULAR_RED}
              key={character}
              letter={character}
            />
          ))}
          <span className="col-span-1" />
          {(['Delete', 'End', 'PageDown'] as const).map((character) => (
            <Key
              backgroundColor={ANGULAR_RED}
              color={WHITE}
              key={character}
              letter={character}
            />
          ))}
        </KeyboardRow>
        <KeyboardRow>
          <Key
            backgroundColor={ANGULAR_RED}
            color={WHITE}
            letter={'CapsLock'}
          />
          {(
            ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'"] as const
          ).map((character) => (
            <Key
              backgroundColor={WHITE}
              color={ANGULAR_RED}
              key={character}
              letter={character}
            />
          ))}
          <Key backgroundColor={ANGULAR_BLUE} color={WHITE} letter="Enter" />
        </KeyboardRow>
        <KeyboardRow>
          <Key
            backgroundColor={ANGULAR_RED}
            color={WHITE}
            letter={'LeftShift'}
          />
          {(['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'] as const).map(
            (character) => (
              <Key
                backgroundColor={WHITE}
                color={ANGULAR_RED}
                key={character}
                letter={character}
              />
            ),
          )}
          <Key
            backgroundColor={ANGULAR_BLUE}
            color={WHITE}
            letter="RightShift"
          />
          <span className="col-span-5" />
          <Key backgroundColor={WHITE} color={ANGULAR_RED} letter="ArrowUp" />
        </KeyboardRow>
        <KeyboardRow>
          {(['Control', 'Meta', 'Alt'] as const).map((character) => (
            <Key
              backgroundColor={ANGULAR_RED}
              color={WHITE}
              key={character}
              letter={character}
            />
          ))}
          <Key backgroundColor={WHITE} color={ANGULAR_RED} letter={' '} />
          {(['Alt', 'Meta', 'Fn', 'Control'] as const).map((character) => (
            <Key
              backgroundColor={ANGULAR_BLUE}
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
                color={ANGULAR_RED}
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
