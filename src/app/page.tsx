'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { ReactElement, ReactNode } from 'react';

import AngularKeyboard from '~/components/keyboards/AngularKeyboard';
import AstroKeyboard from '~/components/keyboards/astro/AstroKeyboard';
import DocusaurusKeyboard from '~/components/keyboards/DocusaurusKeyboard';
import QwikKeyboard from '~/components/keyboards/QwikKeyboard';
import ReactKeyboard from '~/components/keyboards/ReactKeyboard';
import SvelteKeyboard from '~/components/keyboards/SvelteKeyboard';
import VueKeyboard from '~/components/keyboards/VueKeyboard';

import AstroMark from '~/components/logos/astro.svg';
import AngularMark from '~/components/logos/angular.svg';
import DocusaurusMark from '~/components/logos/docusaurus.svg';
import QwikMark from '~/components/logos/qwik.svg';
import ReactMark from '~/components/logos/react.svg';
import SvelteMark from '~/components/logos/svelte.svg';
import VueMark from '~/components/logos/vue.svg';
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';

const keyboards: ReadonlyArray<{
  id: string;
  backgroundClass: string;
  logoMark: ReactElement;
  keyboard: ReactElement;
}> = [
  {
    id: 'react',
    backgroundClass: 'bg-[#149dca]',
    logoMark: (
      <Image className="w-10 md:w-16" alt="React Logo" src={ReactMark} />
    ),
    keyboard: <ReactKeyboard />,
  },
  {
    id: 'vue',
    backgroundClass: 'bg-[#42b883]',
    logoMark: <Image className="w-10 md:w-16" alt="Vue Logo" src={VueMark} />,
    keyboard: <VueKeyboard />,
  },
  {
    id: 'angular',
    backgroundClass: 'bg-[#dd0031]',
    logoMark: (
      <Image className="w-12 md:w-20" alt="Angular Logo" src={AngularMark} />
    ),
    keyboard: <AngularKeyboard />,
  },
  {
    id: 'svelte',
    backgroundClass: 'bg-[#ff4700]',
    logoMark: (
      <Image className="w-10 md:w-16" alt="Svelte Logo" src={SvelteMark} />
    ),
    keyboard: <SvelteKeyboard />,
  },
  {
    id: 'astro',
    backgroundClass: 'bg-[#872de6]',
    logoMark: (
      <Image className="h-6 md:h-10" alt="Astro Logo" src={AstroMark} />
    ),
    keyboard: <AstroKeyboard />,
  },
  {
    id: 'docusaurus',
    backgroundClass: 'bg-slate-700',
    logoMark: (
      <Image
        className="h-6 md:h-10"
        alt="Docusaurus Logo"
        src={DocusaurusMark}
      />
    ),
    keyboard: <DocusaurusKeyboard />,
  },
  {
    id: 'qwik',
    backgroundClass: 'bg-[#101010]',
    logoMark: <Image className="h-8 md:h-12" alt="Qwik Logo" src={QwikMark} />,
    keyboard: <QwikKeyboard />,
  },
];

function Frame({
  id,
  children,
  className,
  logoMark,
  onNextClick,
  onPrevClick,
  isFirst,
  isLast,
}: Readonly<{
  id: string;
  children: ReactNode;
  className?: string;
  logoMark: ReactNode;
  isFirst: boolean;
  isLast: boolean;
  onPrevClick: () => void;
  onNextClick: () => void;
}>) {
  return (
    <div
      className={clsx(
        'relative flex items-center justify-center md:h-screen',
        className,
      )}
      id={id}>
      {logoMark && <div className="absolute top-12 md:top-16">{logoMark}</div>}
      <div className="max-w-screen-lg px-4 md:px-6 lg:px-8 py-36 mx-auto grow">
        {children}
      </div>
      <div className="hidden md:flex absolute bottom-8 right-8 z-10 flex-col gap-2">
        {!isFirst && (
          <button
            aria-label="Previous item"
            className="text-white inline-block"
            onClick={() => {
              onPrevClick();
            }}>
            <ArrowUpIcon className="h-8 w-8 hover:opacity-80 transition-opacity" />
          </button>
        )}
        {!isLast && (
          <button
            aria-label="Next item"
            className="text-white inline-block"
            onClick={() => {
              onNextClick();
            }}>
            <ArrowDownIcon className="h-8 w-8 hover:opacity-80 transition-opacity" />
          </button>
        )}
      </div>
    </div>
  );
}

function scrollItemIntoView(index: number) {
  const item = keyboards[index];

  document.getElementById(item.id)?.scrollIntoView({
    behavior: 'smooth',
  });
}

export default function Home() {
  return (
    <main>
      {keyboards.map((keyboard, index) => (
        <Frame
          id={keyboard.id}
          key={keyboard.id}
          className={keyboard.backgroundClass}
          logoMark={keyboard.logoMark}
          isFirst={index === 0}
          isLast={index === keyboards.length - 1}
          onNextClick={() => {
            scrollItemIntoView((index + 1) % keyboards.length);
          }}
          onPrevClick={() => {
            scrollItemIntoView(
              (index - 1 + keyboards.length) % keyboards.length,
            );
          }}>
          {keyboard.keyboard}
        </Frame>
      ))}
    </main>
  );
}
