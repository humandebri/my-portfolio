import type { Metadata } from "next";
import "./globals.css";
import { inter } from '@/app/ui/fonts';
import TopNav from '@/app/ui/topnav';

export const metadata: Metadata = {
  title: {
    template: '%s | Hude\'s Portfolio',
    default: 'Hude\'s Portfolio',
  },
  description: 'The official hude Dashboard built with App Router.',
  // metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex h-screen flex-col flex-row overflow-hidden">
          <div className="w-full">
            <TopNav />
          </div>
          <div className="flex-grow p-6 overflow-y-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}

