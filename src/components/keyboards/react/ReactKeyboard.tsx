import clsx from 'clsx';
import { Tab } from '@headlessui/react';

import ReactKeyboard65 from './ReactKeyboard65';
import ReactKeyboard75 from './ReactKeyboard75';

type KeyboardShown = '65' | '75';

export default function ReactKeyboard() {
  return (
    <div className="flex flex-col">
      <Tab.Group>
        <Tab.Panels className="relative flex items-center grow">
          <Tab.Panel className="w-full">
            <div className="absolute w-full">
              <ReactKeyboard65 />
            </div>
            {/* Render invisible tallest keyboard placeholder that
              this tab panel has the same height as the other. */}
            <div aria-hidden={true} className="w-full invisible">
              <ReactKeyboard75 />
            </div>
          </Tab.Panel>
          <Tab.Panel className="w-full">
            <ReactKeyboard75 />
          </Tab.Panel>
        </Tab.Panels>
        <Tab.List className="mt-2 gap-x-1 rounded-xl bg-sky-900/20 p-1 self-center">
          {['65', '75'].map((keyboard) => (
            <Tab
              key={keyboard}
              className={({ selected }) =>
                clsx(
                  'rounded-lg py-2.5 px-8 text-sm font-medium leading-5',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow text-sky-700'
                    : 'text-white hover:bg-white/[0.12]',
                )
              }>
              {keyboard}%
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
}
