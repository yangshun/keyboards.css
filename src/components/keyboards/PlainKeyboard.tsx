import Key from '../Key';
import KeyboardRow from '../KeyboardRow';

const keyBackgroundColor = '#fff';

export default function PlainKeyboard() {
  return (
    <div className="flex flex-col gap-6 bg-slate-100 p-4 rounded-lg w-full shadow-lg">
      <KeyboardRow>
        <Key backgroundColor={keyBackgroundColor} letter={'Escape'} />
        <span className="col-span-4" />
        {(['F1', 'F2', 'F3', 'F4'] as const).map((character) => (
          <Key
            backgroundColor={keyBackgroundColor}
            key={character}
            letter={character}
          />
        ))}
        <span className="col-span-2" />
        {(['F5', 'F6', 'F7', 'F8'] as const).map((character) => (
          <Key
            backgroundColor={keyBackgroundColor}
            key={character}
            letter={character}
          />
        ))}
        <span className="col-span-2" />
        {(['F9', 'F10', 'F11', 'F12'] as const).map((character) => (
          <Key
            backgroundColor={keyBackgroundColor}
            key={character}
            letter={character}
          />
        ))}
        <span className="col-span-1" />
        {(['PrintScreen', 'ScrollLock', 'Pause'] as const).map((character) => (
          <Key
            backgroundColor={keyBackgroundColor}
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
              'Backspace',
            ] as const
          ).map((character) => (
            <Key
              backgroundColor={keyBackgroundColor}
              key={character}
              letter={character}
            />
          ))}
          <span className="col-span-1" />
          {(['Insert', 'Home', 'PageUp'] as const).map((character) => (
            <Key
              backgroundColor={keyBackgroundColor}
              key={character}
              letter={character}
            />
          ))}
        </KeyboardRow>
        <KeyboardRow>
          {(
            [
              'Tab',
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
              backgroundColor={keyBackgroundColor}
              key={character}
              letter={character}
            />
          ))}
          <span className="col-span-1" />
          {(['Delete', 'End', 'PageDown'] as const).map((character) => (
            <Key
              backgroundColor={keyBackgroundColor}
              key={character}
              letter={character}
            />
          ))}
        </KeyboardRow>
        <KeyboardRow>
          {(
            [
              'CapsLock',
              'A',
              'S',
              'D',
              'F',
              'G',
              'H',
              'J',
              'K',
              'L',
              ';',
              "'",
              'Enter',
            ] as const
          ).map((character) => (
            <Key
              backgroundColor={keyBackgroundColor}
              key={character}
              letter={character}
            />
          ))}
        </KeyboardRow>
        <KeyboardRow>
          {(
            [
              'LeftShift',
              'Z',
              'X',
              'C',
              'V',
              'B',
              'N',
              'M',
              ',',
              '.',
              '/',
              'RightShift',
            ] as const
          ).map((character) => (
            <Key
              backgroundColor={keyBackgroundColor}
              key={character}
              letter={character}
            />
          ))}
          <span className="col-span-5" />
          <Key backgroundColor={keyBackgroundColor} letter="ArrowUp" />
        </KeyboardRow>
        <KeyboardRow>
          {(
            [
              'Control',
              'Meta',
              'Alt',
              ' ',
              'Alt',
              'Meta',
              'Fn',
              'Control',
            ] as const
          ).map((character) => (
            <Key
              backgroundColor={keyBackgroundColor}
              key={character}
              letter={character}
            />
          ))}
          <span className="col-span-1" />
          {(['ArrowLeft', 'ArrowDown', 'ArrowRight'] as const).map(
            (character) => (
              <Key
                backgroundColor={keyBackgroundColor}
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
