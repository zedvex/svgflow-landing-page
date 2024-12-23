'use client';

// import { motion, useAnimate } from 'motion/react';
// import { useAnimate } from 'motion/react';
import Image from 'next/image';
// import { useEffect, useState } from 'react';
import { useState } from 'react';

// import Pointer from '@/components/Pointer';
import { Button } from '@/components/ui/button';
// import designExample1Image from '@/public/assets/images/design-example-1.png';
// import designExample2Image from '@/public/assets/images/design-example-2.png';
import { DOWNLOADS } from '@/constants';
// import { Input } from '@/components/ui/input';
import cursorYouImage from '@/public/assets/images/cursor-you.svg';
// import Link from 'next/link';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  // const [leftDesignScope, leftDesignAnimate] = useAnimate();
  // const [leftPointerScope, leftPointerAnimate] = useAnimate();
  // const [rightDesignScope, rightDesignAnimate] = useAnimate();
  // const [rightPointerScope, rightPointerAnimate] = useAnimate();

  // useEffect(() => {
  //   leftDesignAnimate([
  //     [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
  //     [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
  //   ]);
  //   leftPointerAnimate([
  //     [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
  //     [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
  //     [
  //       leftPointerScope.current,
  //       { x: 0, y: [0, 16, 0] },
  //       { duration: 0.5, ease: 'easeInOut' },
  //     ],
  //   ]);
  //   rightDesignAnimate([
  //     [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
  //     [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
  //   ]);
  //   rightPointerAnimate([
  //     [
  //       rightPointerScope.current,
  //       { opacity: 1 },
  //       { duration: 0.5, delay: 1.5 },
  //     ],
  //     [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
  //     [rightPointerScope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5 }],
  //   ]);
  // }, []);

  return (
    <section
      className="py-24 overflow-x-clip"
      style={{
        cursor: `url(${cursorYouImage.src}), auto`,
      }}
    >
      <div className="container relative">
        {/* <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          drag
          className="absolute -left-32 top-16 hidden lg:block"
        >
          <Image
            src={designExample1Image}
            alt="design-example-1"
            draggable="false"
          />
        </motion.div>
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="absolute left-56 top-96 hidden lg:block"
        >
          <Pointer name="Andrea" color="blue" />
        </motion.div>
        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, x: 100, y: 100 }}
          drag
          className="absolute -right-64 -top-16 hidden lg:block"
        >
          <Image
            src={designExample2Image}
            alt="design-example-2"
            draggable="false"
          />
        </motion.div>
        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, x: 275, y: 100 }}
          className="absolute right-80 -top-4 hidden lg:block"
        >
          <Pointer name="Ian" color="red" />
        </motion.div> */}

        <div className="flex justify-center">
          <h3 className="tag">✨ $120k seed round raised</h3>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
          SVG viewing should be simple
        </h1>

        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          Tired of clunky SVG viewers? SVGFlow makes it effortless to open,
          inspect and navigate your SVG files with powerful zoom, pan and
          property inspection tools.
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-8 mt-12">
          {/* Left side - Image */}
          <div className="flex-1">
            <div
              onClick={() => setShowModal(true)}
              className="relative group cursor-pointer flex justify-center items-center"
            >
              <Image
                src="/assets/images/svgflow-interface-hd-v2.png"
                alt="SVGFlow Interface"
                width={600}
                height={400}
                quality={100}
                className="rounded-lg shadow-lg hover:opacity-90 transition-opacity cursor-pointer"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-50 transition-opacity">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="black"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                </svg>
              </div>
            </div>

            {showModal && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                onClick={() => setShowModal(false)}
              >
                <div className="relative" onClick={(e) => e.stopPropagation()}>
                  <Image
                    src="/assets/images/svgflow-interface-hd-v2.png"
                    alt="SVGFlow Interface"
                    width={1200}
                    height={800}
                    quality={100}
                    className="rounded-lg max-h-[90vh] w-auto"
                  />
                  <button
                    type="button"
                    className="absolute top-4 right-4 text-white bg-black bg-opacity-75 rounded-full px-3 py-1.5 hover:bg-opacity-90 text-xl font-bold shadow-lg border-2 border-white/50 hover:border-white transition-all"
                    onClick={() => setShowModal(false)}
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right side - Text and Download */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl font-bold">SVG viewing should be simple</h1>

            <p className="text-lg text-gray-300">
              SVGFlow makes it effortless to open, inspect and navigate your SVG
              files with powerful zoom, pan and property inspection tools.
              That&apos;s why we built SVGFlow - and it&apos;s free to download.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Button
                  variant="default"
                  className="w-full md:w-auto font-bold px-8 py-3 bg-[#1e864d] hover:bg-[#39be75] text-white"
                  onClick={() => {
                    /* Add download handler */
                  }}
                >
                  Download SVGFlow
                </Button>
                <span className="text-sm text-gray-400">
                  Version {DOWNLOADS.windows.version} • {/* Add file size */}{' '}
                  1.54MB
                </span>
              </div>

              <div className="flex justify-start gap-6">
                {/* <Image src="/assets/icons/windows.svg" alt="Windows" width={32} height={32} /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                </svg>
                {/* <Image src="/assets/icons/apple.svg" alt="macOS" width={32} height={32} /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z" />
                </svg>
                {/* <Image src="/assets/icons/linux.svg" alt="Linux" width={32} height={32} /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.581 19.049c-.55-.446-.336-1.431-.907-1.917.553-3.365-.997-6.331-2.845-8.232-1.551-1.595-1.051-3.147-1.051-4.49 0-2.146-.881-4.41-3.55-4.41-2.853 0-3.635 2.38-3.663 3.738-.068 3.262.659 4.11-1.25 6.484-2.246 2.793-2.577 5.579-2.07 7.057-.237.276-.557.582-1.155.835-1.652.72-.441 1.925-.898 2.78-.13.243-.192.497-.192.74 0 .75.596 1.399 1.679 1.302 1.461-.13 2.809.905 3.681.905.77 0 1.402-.438 1.696-1.041 1.377-.339 3.077-.296 4.453.059.247.691.917 1.141 1.662 1.141 1.631 0 1.945-1.849 3.816-2.475.674-.225 1.013-.879 1.013-1.488 0-.39-.139-.761-.419-.988zm-9.147-10.465c-.319 0-.583-.258-1-.568-.528-.392-1.065-.618-1.059-1.03 0-.283.379-.37.869-.681.526-.333.731-.671 1.249-.671.53 0 .69.268 1.41.579.708.307 1.201.427 1.201.773 0 .355-.741.609-1.158.868-.613.378-.928.73-1.512.73z" />
                </svg>
              </div>

              <p className="text-sm text-gray-400">
                {/* Add download count */} 1,647 downloads so far
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
