import type { Metadata } from "next";
import "./globals.css";
import TopNav from '@/app/ui/topnav';
import {Shippori_Mincho , Montserrat} from 'next/font/google'


const montserrat = Montserrat({ 
  subsets: ['latin'],
  // 必要に応じて調整
  weight: ['400', '700'],
  variable: '--font-montserrat', // Tailwindで使用する変数名
})

const shipporiMincho = Shippori_Mincho({
  weight: ['400', '500', '700'], // 必要な太さを選択
  subsets: ['latin'], 
  display: 'swap',
  variable: '--font-shippori-mincho',
})

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
    <html lang="ja" className={`${montserrat.variable} ${shipporiMincho.variable}`}>
      <body className={`${montserrat.className} antialiased`}>
        <div className="flex flex-col min-h-screen h-full bg-gray-200">
          <div className="w-full  z-50 ">
            <TopNav />
          </div>
          <div className="flex-grow overflow-y-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}

