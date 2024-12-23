import acmeLogo from '@/public/assets/images/acme-corp.svg';
import apexLogo from '@/public/assets/images/apex.svg';
import celestialLogo from '@/public/assets/images/celestial.svg';
import echoValleyLogo from '@/public/assets/images/echo-valley.svg';
import figmaIcon from '@/public/assets/images/figma-logo.svg';
import framerIcon from '@/public/assets/images/framer-logo.svg';
import githubIcon from '@/public/assets/images/github-logo.svg';
import notionIcon from '@/public/assets/images/notion-logo.svg';
import outsideLogo from '@/public/assets/images/outside.svg';
import pulseLogo from '@/public/assets/images/pulse.svg';
import quantumLogo from '@/public/assets/images/quantum.svg';
import relumeIcon from '@/public/assets/images/relume-logo.svg';
import slackIcon from '@/public/assets/images/slack-logo.svg';
import twiceLogo from '@/public/assets/images/twice.svg';

export const NAV_LINKS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Features',
    href: '#features',
  },
  // {
  //   label: 'Integrations',
  //   href: '#integrations',
  // },
  {
    label: 'FAQs',
    href: '#faqs',
  },
];

export const LOGOS = [
  {
    name: 'Quantum',
    image: quantumLogo,
  },
  {
    name: 'Acme Corp',
    image: acmeLogo,
  },
  {
    name: 'Echo Valley',
    image: echoValleyLogo,
  },
  {
    name: 'Pulse',
    image: pulseLogo,
  },
  {
    name: 'Outside',
    image: outsideLogo,
  },
  {
    name: 'Apex',
    image: apexLogo,
  },
  {
    name: 'Celestial',
    image: celestialLogo,
  },
  {
    name: 'Twice',
    image: twiceLogo,
  },
];

export const FEATURES = [
  'Powerful Zoom',
  'Pan Controls',
  'Property Inspector',
  'Quick Open',
  'Easy Navigation',
  'Fast Search',
  'SVG Preview',
];

export const INTEGRATIONS = [
  {
    name: 'Figma',
    icon: figmaIcon,
    description: 'Import SVGs directly from your Figma designs.',
  },
  {
    name: 'Notion',
    icon: notionIcon,
    description: 'Organize and document your SVG assets in Notion.',
  },
  {
    name: 'Slack',
    icon: slackIcon,
    description: 'Share SVGs instantly with your team via Slack.',
  },
  {
    name: 'Relume',
    icon: relumeIcon,
    description: 'Seamless SVG integration with Relume projects.',
  },
  {
    name: 'Framer',
    icon: framerIcon,
    description: 'View and edit SVGs for your Framer prototypes.',
  },
  {
    name: 'GitHub',
    icon: githubIcon,
    description: 'Version control your SVG assets with GitHub.',
  },
];

export const FAQs = [
  {
    question: 'How is SVGFlow different from other SVG viewers?',
    answer:
      'Unlike traditional SVG viewers that feel clunky and outdated, SVGFlow focuses on simplicity and efficiency. Our modern interface makes it effortless to open, inspect and navigate your SVG files.',
  },
  {
    question: 'What are the main features?',
    answer:
      'SVGFlow comes with powerful zoom capabilities, intuitive pan controls, and detailed property inspection tools. You can easily navigate complex SVGs and inspect every element with precision.',
  },
  {
    question: 'Can I use SVGFlow offline?',
    answer:
      'Yes! SVGFlow works completely offline. You can view and inspect your SVG files anywhere, anytime, without needing an internet connection.',
  },
  {
    question: 'Does SVGFlow support all SVG features?',
    answer:
      "SVGFlow supports all standard SVG features and specifications. Whether you're working with simple icons or complex illustrations, SVGFlow handles them all seamlessly.",
  },
  {
    question: 'How does SVGFlow handle large SVG files?',
    answer:
      'SVGFlow is optimized for performance, handling even the largest SVG files with ease. Our efficient rendering engine ensures smooth zooming and panning regardless of file size.',
  },
];

export const FOOTER_LINKS = [
  {
    href: '/contact',
    label: 'Contact',
  },
  {
    href: '/privacy-policy',
    label: 'Privacy Policy',
  },
  {
    href: '/terms-and-conditions',
    label: 'Terms & Conditions',
  },
];

export const DOWNLOADS = {
  windows: {
    version: 'v0.1.3',
    url: 'https://your-storage-url/SVGFlow-Setup-0.1.2.exe',
  },
  mac: {
    version: 'v0.1.3',
    url: 'https://your-storage-url/SVGFlow-0.1.2.dmg',
  },
  linux: {
    version: 'v0.1.3',
    url: 'https://your-storage-url/SVGFlow-0.1.2.AppImage',
  },
};
