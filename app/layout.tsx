import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Pokedex',
  description: 'Pokemon information garage',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <section
            id="header"
            className="p-4 flex flex-col items-center gap-2 my-5"
          >
            <h2 className="font-mono text-4xl font-semibold">
              Welcome to Pokedex
            </h2>
            <p className="text-semibold text-base">
              pokemon information database
            </p>
          </section>
          <main id="content" className="flex-1 p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
