import AngularKeyboard from '~/components/keyboards/AngularKeyboard';
import AstroKeyboard from '~/components/keyboards/AstroKeyboard';
import DocusaurusKeyboard from '~/components/keyboards/DocusaurusKeyboard';
import PlainKeyboard from '~/components/keyboards/PlainKeyboard';
import QwikKeyboard from '~/components/keyboards/QwikKeyboard';
import ReactKeyboard from '~/components/keyboards/ReactKeyboard';
import SvelteKeyboard from '~/components/keyboards/SvelteKeyboard';
import VueKeyboard from '~/components/keyboards/VueKeyboard';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 md:px-6 lg:px-8 py-24 max-w-screen-lg gap-16 md:gap-24 mx-auto">
      <ReactKeyboard />
      <VueKeyboard />
      <AngularKeyboard />
      <SvelteKeyboard />
      <AstroKeyboard />
      <DocusaurusKeyboard />
      <QwikKeyboard />
      <PlainKeyboard />
    </main>
  );
}
