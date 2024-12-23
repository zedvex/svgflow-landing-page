'use client';

import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { NAV_LINKS } from '@/constants';
import { cn } from '@/lib/utils';

import Btn from './Btn';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="py-4 lg:py-8 fixed w-full top-0 z-50">
        <div className="container">
          <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
            <div className="flex justify-between items-center p-2 md:px-2">
              <Link
                href="/"
                className="relative h-9 md:h-12 w-42 md:w-44 md:-ml-2"
              >
                <Image
                  src="/assets/images/SVGFlow-logo-transparent.png"
                  alt="logo"
                  fill
                  className="ml-4"
                  style={{ objectFit: 'contain' }}
                />
              </Link>
              <nav className="hidden lg:inline-flex">
                <ul className="flex items-center gap-8">
                  {NAV_LINKS.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-menu md:hidden mr-2"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                    className={cn(
                      'origin-left transition',
                      isOpen && 'rotate-45 -translate-y-1',
                    )}
                  ></line>
                  <line
                    x1="3"
                    y1="12"
                    x2="21"
                    y2="12"
                    className={cn('transition', isOpen && 'opacity-0')}
                  ></line>
                  <line
                    x1="3"
                    y1="18"
                    x2="21"
                    y2="18"
                    className={cn(
                      'origin-left transition',
                      isOpen && '-rotate-45 translate-y-1',
                    )}
                  ></line>
                </svg>

                {/* <Btn
                  variant="outline"
                  className="border border-white/40 px-7 font-normal"
                >
                  Log In
                </Btn> */}
                <Btn
                  variant="default"
                  className="font-bold px-6 bg-primary bg-[#29abe2] text-slate-800"
                >
                  Download
                </Btn>
              </div>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  className="flex flex-col items-center overflow-hidden"
                >
                  {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.label} className="py-2">
                      {link.label}
                    </Link>
                  ))}

                  <div className="py-2 flex flex-col gap-2">
                    {/* <Btn variant="outline" className="block">
                      Log In
                    </Btn> */}
                    <Btn className="block bg-[#29abe2] text-slate-800 font-bold">
                      Download
                    </Btn>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>
      <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]"></div>
    </>
  );
};

export default Header;
