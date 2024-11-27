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
  {
    label: 'Integrations',
    href: '#integrations',
  },
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
  'Asset Library',
  'Code Preview',
  'Flow Mode',
  'Smart Sync',
  'Auto Layout',
  'Fast Search',
  'Smart Guides',
];

export const INTEGRATIONS = [
  {
    name: 'Figma',
    icon: figmaIcon,
    description: 'Figma is a collaborative interface design tool.',
  },
  {
    name: 'Notion',
    icon: notionIcon,
    description: 'Notion is an all-in-one workspace for notes and docs.',
  },
  {
    name: 'Slack',
    icon: slackIcon,
    description: 'Slack is a powerful team communication platform.',
  },
  {
    name: 'Relume',
    icon: relumeIcon,
    description: 'Relume is a no-code website builder and design system.',
  },
  {
    name: 'Framer',
    icon: framerIcon,
    description: 'Framer is a professional website prototyping tool.',
  },
  {
    name: 'GitHub',
    icon: githubIcon,
    description: 'GitHub is the leading platform for code collaboration.',
  },
];

export const FAQs = [
  {
    question: 'How is Layers different from other design tools?',
    answer:
      'Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.',
  },
  {
    question: 'Is there a learning curve?',
    answer:
      'Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.',
  },
  {
    question: 'How do you handle version control?',
    answer:
      'Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.',
  },
  {
    question: 'Can I work offline?',
    answer:
      "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
  },
  {
    question: 'How does Layers handle collaboration?',
    answer:
      'Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.',
  },
];

export const FOOTER_LINKS = [
  {
    href: '#',
    label: 'Contact',
  },
  {
    href: '#',
    label: 'Privacy Policy',
  },
  {
    href: '#',
    label: 'Terms & Conditions',
  },
];
