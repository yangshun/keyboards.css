import Key from '../Key';
import KeyboardRow from '../KeyboardRow';

const QWIK_BLUE = '#0093ee';
const QWIK_PURPLE = '#ac7ff4';
const ACCENT_BLACK = '#0e201a';
const LIGHT_GRAY = '#f9f9f9';
const WHITE = '#fff';

export default function QwikKeyboard() {
  return (
    <div
      className="flex flex-col gap-3 sm:gap-6 p-2 sm:p-4 rounded-lg w-full shadow-xl"
      style={{ backgroundColor: LIGHT_GRAY }}>
      <KeyboardRow>
        <Key backgroundColor={QWIK_PURPLE} color={WHITE} letter={'Escape'} />
        <span className="col-span-4" />
        {(['F1', 'F2', 'F3', 'F4'] as const).map((character) => (
          <Key
            backgroundColor={ACCENT_BLACK}
            color={WHITE}
            key={character}
            letter={character}
          />
        ))}
        <span className="col-span-2" />
        {(['F5', 'F6', 'F7', 'F8'] as const).map((character) => (
          <Key
            backgroundColor={ACCENT_BLACK}
            color={WHITE}
            key={character}
            letter={character}
          />
        ))}
        <span className="col-span-2" />
        {(['F9', 'F10', 'F11', 'F12'] as const).map((character) => (
          <Key
            backgroundColor={ACCENT_BLACK}
            color={WHITE}
            key={character}
            letter={character}
          />
        ))}
        <span className="col-span-1" />
        {(['PrintScreen', 'ScrollLock', 'Pause'] as const).map((character) => (
          <Key
            backgroundColor={QWIK_BLUE}
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
          <Key backgroundColor={WHITE} letter={'Backspace'} />
          <span className="col-span-1" />
          {(['Insert', 'Home', 'PageUp'] as const).map((character) => (
            <Key backgroundColor={WHITE} key={character} letter={character} />
          ))}
        </KeyboardRow>
        <KeyboardRow>
          <Key backgroundColor={QWIK_PURPLE} color={WHITE} letter={'Tab'} />
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
            <Key backgroundColor={WHITE} key={character} letter={character} />
          ))}
          <Key backgroundColor={QWIK_PURPLE} color={WHITE} letter={'\\'} />
          <span className="col-span-1" />
          {(['Delete', 'End', 'PageDown'] as const).map((character) => (
            <Key backgroundColor={WHITE} key={character} letter={character} />
          ))}
        </KeyboardRow>
        <KeyboardRow>
          <Key
            backgroundColor={QWIK_PURPLE}
            color={WHITE}
            letter={'CapsLock'}
          />
          {(
            ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'"] as const
          ).map((character) => (
            <Key backgroundColor={WHITE} key={character} letter={character} />
          ))}
          <Key backgroundColor={QWIK_PURPLE} color={WHITE} letter="Enter" />
        </KeyboardRow>
        <KeyboardRow>
          <Key
            backgroundColor={QWIK_PURPLE}
            color={WHITE}
            letter={'LeftShift'}
          />
          {(['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'] as const).map(
            (character) => (
              <Key backgroundColor={WHITE} key={character} letter={character} />
            ),
          )}
          <Key
            backgroundColor={QWIK_PURPLE}
            color={WHITE}
            letter="RightShift"
          />
          <span className="col-span-5" />
          <Key backgroundColor={ACCENT_BLACK} color={WHITE} letter="ArrowUp" />
        </KeyboardRow>
        <KeyboardRow>
          {(['Control', 'Meta', 'Alt'] as const).map((character) => (
            <Key
              backgroundColor={QWIK_BLUE}
              color={WHITE}
              key={character}
              letter={character}
            />
          ))}
          <Key backgroundColor={ACCENT_BLACK} letter={' '} />
          {(['Alt', 'Meta', 'Fn', 'Control'] as const).map((character) => (
            <Key
              backgroundColor={QWIK_BLUE}
              color={WHITE}
              key={character}
              letter={character}
            />
          ))}
          <span className="col-span-1" />
          {(['ArrowLeft', 'ArrowDown', 'ArrowRight'] as const).map(
            (character) => (
              <Key
                backgroundColor={ACCENT_BLACK}
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
