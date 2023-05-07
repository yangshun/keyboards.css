import Image from 'next/image';
import Key from '../../Key';
import KeyboardRow from '../../KeyboardRow';
import ReactLogo from './react-logo.svg';

import {
  ArrowDownIcon,
  ArrowLeft,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
} from 'lucide-react';
import { useState } from 'react';
import ReactSeventyFiveKeyboard from './ReactSeventyFiveKeyboard';
import ReactSixtyFiveKeyboard from './ReactSixtyFiveKeyboard';
const WHITE = '#fff';
const PRIMARY_BLUE = 'rgb(20 158 202/1)';
const GRAY = 'rgb(35 39 47/1)';
const LIGHT_GRAY = 'rgb(52 58 70/1)';

export default function ReactKeyboard() {
  const [isSeventyFive, setIsSeventyFive] = useState<boolean>(true);

  return (
    <div>
      {isSeventyFive ? (
        <ReactSeventyFiveKeyboard />
      ) : (
        <ReactSixtyFiveKeyboard />
      )}
      <div className="flex flex-row justify-center m-5 mb-3">
        <button
          className="text-white inline-block disabled:text-gray-400"
          disabled={isSeventyFive}
          onClick={() => setIsSeventyFive(true)}>
          <ArrowLeftIcon className="h-8 w-8 hover:opacity-80 transition-opacity" />
        </button>
        <button
          className="text-white inline-block disabled:text-gray-400"
          disabled={!isSeventyFive}
          onClick={() => setIsSeventyFive(false)}>
          <ArrowRightIcon className="h-8 w-8 hover:opacity-80 transition-opacity" />
        </button>
      </div>
      <div className="text-white flex flex-row justify-center ">
        Toggle Size
      </div>
    </div>
  );
}
