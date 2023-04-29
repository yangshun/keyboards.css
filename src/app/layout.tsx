import GitHubIcon from '~/components/icons/GitHubIcon';
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Keyboards.css',
  description: 'Pure CSS keyboards with themes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Link
          href="https://github.com/yangshun/keyboards.css"
          target="_blank"
          rel="noopener"
          className="fixed top-8 right-8 z-10 text-white inline-block">
          <GitHubIcon
            aria-label="GitHub"
            className="h-8 w-8 hover:opacity-80 transition-opacity"
          />
        </Link>
        {children}
      </body>
    </html>
  );
}
