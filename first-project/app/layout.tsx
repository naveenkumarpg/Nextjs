import type { Metadata } from 'next';
import './globals.css';
import { PageNavigation } from '@/Components/Navigation/Navigation';

export const metadata: Metadata = {
  title: 'Foodie',
  description: 'Meal APP',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div
          className="mx-auto max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <PageNavigation />
          {children}
        </div>
      </body>
    </html>
  );
}
