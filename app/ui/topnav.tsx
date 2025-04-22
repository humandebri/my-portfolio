// import NavLinks from "./navlinks";
'use client';
import Link from 'next/link';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the top navigation.
// Depending on the size of the application, this would be stored in a database.

const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  {name: 'Portfolio',href: '/portfolio',icon: DocumentDuplicateIcon,},
  { name: 'Works', href: '/works', icon: UserGroupIcon },
  { name: 'Contact', href: '/contact', icon: EnvelopeIcon },
];


export default function TopNav() {
  const pathname = usePathname();
  return (

    <div className="w-full bg-gray-100 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
      <div className="mx-auto h-12 max-w-6xl">
        <ul className="relative mx-12 flex h-full flex-row items-center justify-between text-[16px] font-medium sm:text-[18px]">

        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                // 'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                'flex items-center gap-2 hover:cursor-pointer',
                {
                  'text-blue-600': pathname === link.href,
                },
              )}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
        </ul>
      </div>
    </div>

  );
} 

