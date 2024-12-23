import Image from 'next/image';
import Link from 'next/link';

import { FOOTER_LINKS } from '@/constants';
import logoImage from '@/public/assets/images/SVGFlow-logo-transparent.png';

const Footer = () => {
  return (
    <footer className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
          <div>
            <Image src={logoImage} alt="logo" className="w-64" />
          </div>
          <div>
            <nav className="flex gap-6">
              {FOOTER_LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.label}
                  className="text-white/50 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
