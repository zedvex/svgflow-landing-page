'use client';

// import { useScroll, useTransform } from 'motion/react';
// import { useEffect, useRef, useState } from 'react';

import Tag from '@/components/Tag';
// import { cn } from '@/lib/utils';

const text =
  'Tired of clunky SVG viewers? SVGFlow makes it effortless to open, inspect and navigate your SVG files with powerful zoom, pan and property inspection tools.';
// const words = text.split(' ');

const Introduction = () => {
  // const scrollTarget = useRef<HTMLDivElement>(null);

  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <div>
          <div className="flex justify-center">
            <Tag>Introducing SVGFlow</Tag>
          </div>
          <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
            <span className="text-white">SVG viewing should be simple.</span>{' '}
            <span className="text-white/50">{text}</span>
            <span className="text-[#29abe2] block">
              That&apos;s why we built SVGFlow.
            </span>
          </div>
        </div>
        {/* <div ref={scrollTarget} className="h-[50vh]" /> */}
      </div>
    </section>
  );
};

export default Introduction;
