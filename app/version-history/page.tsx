'use client';

import { motion } from 'motion/react';

import Header from '@/components/Header';
import Footer from '@/sections/Footer';

interface Release {
  version: string;
  date: string;
  type: 'major' | 'minor' | 'patch';
  changes: {
    type: 'new' | 'improved' | 'fixed';
    description: string;
  }[];
}

const releases: Release[] = [
  {
    version: '0.1.5',
    date: '2025-01-17',
    type: 'patch',
    changes: [
      {
        type: 'new',
        description: 'Initial public MVP release',
      },
      {
        type: 'improved',
        description: 'Smooth zoom and pan for better SVG viewing experience',
      },
      {
        type: 'new',
        description: 'Element inspection with color values and dimensions',
      },
      {
        type: 'new',
        description: 'Enhanced export capabilities (SVG, PNG, JPG)',
      },
      {
        type: 'new',
        description: 'Added feedback system for user suggestions',
      },
      {
        type: 'improved',
        description: 'UI/UX improvements and bug fixes',
      },
    ],
  },
  {
    version: '0.1.4',
    date: '2025-12-17',
    type: 'patch',
    changes: [
      {
        type: 'new',
        description: 'Added grid system with customizable settings',
      },
      {
        type: 'new',
        description: 'Implemented rulers and guidelines',
      },
      {
        type: 'improved',
        description: 'Enhanced element property inspection',
      },
      {
        type: 'improved',
        description: 'Improved file handling and error messages',
      },
      {
        type: 'improved',
        description: 'Performance optimizations',
      },
    ],
  },
  {
    version: '0.1.3',
    date: '2025-11-03',
    type: 'patch',
    changes: [
      {
        type: 'new',
        description: 'Initial core functionality implementation',
      },
      {
        type: 'new',
        description: 'Basic SVG file loading and viewing',
      },
      {
        type: 'new',
        description: 'Simple zoom and pan controls',
      },
      {
        type: 'new',
        description: 'Basic element selection',
      },
      {
        type: 'new',
        description: 'Fundamental UI structure',
      },
    ],
  },
];

const getTypeColor = (type: Release['type']) => {
  switch (type) {
    case 'major':
      return 'from-purple-500 to-blue-500';
    case 'minor':
      return 'from-blue-500 to-cyan-500';
    case 'patch':
      return 'from-green-500 to-emerald-500';
  }
};

const getChangeTypeIcon = (type: Release['changes'][0]['type']) => {
  switch (type) {
    case 'new':
      return '✨';
    case 'improved':
      return '⚡';
    case 'fixed':
      return '🐛';
  }
};

const getChangeTypeColor = (type: Release['changes'][0]['type']) => {
  switch (type) {
    case 'new':
      return 'text-purple-400';
    case 'improved':
      return 'text-blue-400';
    case 'fixed':
      return 'text-green-400';
  }
};

export default function VersionHistory() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black">
        <div className="container max-w-4xl py-24">
          <h1 className="text-4xl font-bold mb-2">Version History</h1>
          <p className="text-gray-400 mb-12">
            Track our journey in making SVG viewing simple
          </p>

          <div className="space-y-12">
            {releases.map((release, index) => (
              <motion.div
                key={release.version}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {index !== releases.length - 1 && (
                  <div className="absolute left-[39px] top-16 bottom-[-48px] w-[2px] bg-gradient-to-b from-gray-500 to-transparent" />
                )}

                <div className="flex gap-6">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${getTypeColor(
                      release.type,
                    )} p-[1px]`}
                  >
                    <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                      <div className="text-2xl font-mono">
                        {release.version.split('.')[0]}
                        <span className="text-gray-500">
                          .{release.version.split('.').slice(1).join('.')}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-4 mb-4">
                      <h2 className="text-2xl font-bold">
                        Version {release.version}
                      </h2>
                      <div className="text-sm text-gray-400">
                        {release.date}
                      </div>
                    </div>

                    <div className="space-y-3">
                      {release.changes.map((change, changeIndex) => (
                        <motion.div
                          key={changeIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: index * 0.1 + changeIndex * 0.1,
                          }}
                          className="flex items-start gap-3"
                        >
                          <div className="text-xl">
                            {getChangeTypeIcon(change.type)}
                          </div>
                          <div className={`${getChangeTypeColor(change.type)}`}>
                            {change.description}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
