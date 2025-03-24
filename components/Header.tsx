'use client';

import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { DOWNLOADS, NAV_LINKS } from '@/constants';
import { cn } from '@/lib/utils';

import Btn from './Btn';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);

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
              <nav className="hidden lg:flex flex-1 justify-center">
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

                <div className="hidden md:flex gap-2 items-center">
                  <AnimatePresence>
                    {showDownloadOptions && (
                      <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 'auto', opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        className="flex gap-2 overflow-hidden"
                      >
                        <Link 
                          href={DOWNLOADS.windows.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Btn
                            variant="ghost"
                            className="px-4 text-sm flex items-center gap-2 hover:bg-white/10 transition-colors"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                            </svg>
                            Windows
                            <span className="text-xs text-gray-400">{DOWNLOADS.windows.version}</span>
                          </Btn>
                        </Link>

                        <Link 
                          href={DOWNLOADS.mac.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Btn
                            variant="ghost"
                            className="px-4 text-sm flex items-center gap-2 hover:bg-white/10 transition-colors"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z" />
                            </svg>
                            Mac
                            <span className="text-xs text-gray-400">{DOWNLOADS.mac.version}</span>
                          </Btn>
                        </Link>

                        <Link 
                          href={DOWNLOADS.linux.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Btn
                            variant="ghost"
                            className="px-4 text-sm flex items-center gap-2 hover:bg-white/10 transition-colors"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M20.581 19.049c-.55-.446-.336-1.431-.907-1.917.553-3.365-.997-6.331-2.845-8.232-1.551-1.595-1.051-3.147-1.051-4.49 0-2.146-.881-4.41-3.55-4.41-2.853 0-3.635 2.38-3.663 3.738-.068 3.262.659 4.11-1.25 6.484-2.246 2.793-2.577 5.579-2.07 7.057-.237.276-.557.582-1.155.835-1.652.72-.441 1.925-.898 2.78-.13.243-.192.497-.192.74 0 .75.596 1.399 1.679 1.302 1.461-.13 2.809.905 3.681.905.77 0 1.402-.438 1.696-1.041 1.377-.339 3.077-.296 4.453.059.247.691.917 1.141 1.662 1.141 1.631 0 1.945-1.849 3.816-2.475.674-.225 1.013-.879 1.013-1.488 0-.39-.139-.761-.419-.988zm-9.147-10.465c-.319 0-.583-.258-1-.568-.528-.392-1.065-.618-1.059-1.03 0-.283.379-.37.869-.681.526-.333.731-.671 1.249-.671.53 0 .69.268 1.41.579.708.307 1.201.427 1.201.773 0 .355-.741.609-1.158.868-.613.378-.928.73-1.512.73z" />
                            </svg>
                            Linux
                            <span className="text-xs text-gray-400">{DOWNLOADS.linux.version}</span>
                          </Btn>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Btn
                  variant="default"
                  className="font-bold px-6 bg-primary bg-[#29abe2] text-slate-800"
                  onClick={() => setShowDownloadOptions(!showDownloadOptions)}
                >
                  Download Beta
                </Btn>
                <Btn
                  variant="default"
                  className="font-bold px-6 bg-gray-500 text-white"
                  onClick={() => window.location.href = '/contact'}
                >
                  Feedback
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
