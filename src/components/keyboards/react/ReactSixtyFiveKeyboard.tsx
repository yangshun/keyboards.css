import Image from 'next/image';
import Key from '../../Key';
import KeyboardRowSixtyFive from '../../KeyboardRowSixtyFive';
import ReactLogo from './react-logo.svg';

const WHITE = '#fff';
const PRIMARY_BLUE = 'rgb(20 158 202/1)';
const GRAY = 'rgb(35 39 47/1)';
const LIGHT_GRAY = 'rgb(52 58 70/1)';

export default function ReactSixtyFiveKeyboard() {
  return (
    <div
      className="flex flex-col gap-3 sm:gap-6 p-2 sm:p-4 rounded-lg w-full shadow-xl"
      style={{ backgroundColor: GRAY }}>
      <div className="flex flex-col gap-1">
        <KeyboardRowSixtyFive>
          <Key backgroundColor={PRIMARY_BLUE} color={WHITE} letter={'Escape'} />
          {(
            [
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

          {(['Insert'] as const).map((character) => (
            <Key
              backgroundColor={LIGHT_GRAY}
              color={WHITE}
              key={character}
              letter={character}
            />
          ))}
        </KeyboardRowSixtyFive>
        <KeyboardRowSixtyFive>
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
          {
            <Key
              backgroundColor={LIGHT_GRAY}
              color={WHITE}
              key={'PageUp'}
              letter={'PageUp'}
            />
          }
        </KeyboardRowSixtyFive>
        <KeyboardRowSixtyFive>
          <Key backgroundColor={LIGHT_GRAY} color={WHITE} letter={'CapsLock'} />
          {(
            ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'"] as const
          ).map((character) => (
            <Key backgroundColor={WHITE} key={character} letter={character} />
          ))}
          <Key backgroundColor={PRIMARY_BLUE} color={WHITE} letter="Enter" />
          {
            <Key
              backgroundColor={LIGHT_GRAY}
              color={WHITE}
              key={'PageDown'}
              letter={'PageDown'}
            />
          }
        </KeyboardRowSixtyFive>
        <KeyboardRowSixtyFive>
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
          <Key
            backgroundColor={LIGHT_GRAY}
            color={WHITE}
            letter="RightShift2u"
          />
          <Key backgroundColor={PRIMARY_BLUE} color={WHITE} letter="ArrowUp" />
          {
            <Key
              backgroundColor={LIGHT_GRAY}
              color={WHITE}
              key={'End'}
              letter={'End'}
            />
          }
        </KeyboardRowSixtyFive>
        <KeyboardRowSixtyFive>
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
          {(['Alt', 'Meta1u', 'Fn'] as const).map((character) => (
            <Key
              backgroundColor={LIGHT_GRAY}
              color={WHITE}
              key={character}
              letter={character}
            />
          ))}

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
        </KeyboardRowSixtyFive>
      </div>
    </div>
  );
}
