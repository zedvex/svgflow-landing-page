'use client';

import { motion, useAnimate } from 'motion/react';
import Image from 'next/image';
import { useEffect } from 'react';

import Pointer from '@/components/Pointer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import cursorYouImage from '@/public/assets/images/cursor-you.svg';
import designExample1Image from '@/public/assets/images/design-example-1.png';
import designExample2Image from '@/public/assets/images/design-example-2.png';

const Hero = () => {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);
    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: 'easeInOut' },
      ],
    ]);
    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);
    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
      [rightPointerScope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5 }],
    ]);
  }, []);

  return (
    <section
      className="py-24 overflow-x-clip"
      style={{
        cursor: `url(${cursorYouImage.src}), auto`,
      }}
    >
      <div className="container relative">
        <motion.div
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
        </motion.div>
        <div className="flex justify-center">
          <h3 className="tag">✨ $7.5M seed round raised</h3>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
          Impactful design, created effortlessly
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          Design tools shouldn&apos;t slow you down. Layers combines powerful
          features with an intuitive interface that keeps you in your creative
          flow.
        </p>
        <div className="flex border border-white/15 rounded-full p-2 mt-8 items-center md:max-w-lg mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="border-none px-4 text-base md:text-lg focus:ring-0 focus-visible:ring-0 w-full"
          />
          <Button
            className="rounded-full bg-lime-500 text-slate-950 text-base py-6 px-7"
            type="submit"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
