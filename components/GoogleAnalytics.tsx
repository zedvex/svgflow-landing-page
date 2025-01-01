'use client';

import { useEffect } from 'react';

const GoogleAnalytics = () => {
  useEffect(() => {
    // Add the GA4 script tag dynamically
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-JJGD1XYQNP';
    document.head.appendChild(script);

    // Initialize the gtag function
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];

      // Define the gtag function with a more specific type
      type GtagArgs = [string, string, Record<string, unknown>];
      const gtag = (...args: GtagArgs) => {
        window.dataLayer.push(args);
      };

      // Make gtag globally available
      window.gtag = gtag;

      // Configure GA4 with your Measurement ID
      gtag('js', new Date());
      gtag('config', 'G-JJGD1XYQNP');
    };

    return () => {
      // Cleanup script tag if the component is unmounted
      document.head.removeChild(script);
    };
  }, []);

  return null; // This component does not render anything
};

export default GoogleAnalytics;
