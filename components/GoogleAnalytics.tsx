'use client';

import { useEffect } from 'react';

// Define proper types for Google Analytics
type GtagCommand = 'js' | 'config' | 'event';
type GtagArg = Date | string | object;

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

      // Define the gtag function with proper types
      const gtag = (command: GtagCommand, ...args: GtagArg[]) => {
        window.dataLayer.push([command, ...args]);
      };

      // Make gtag globally available
      window.gtag = gtag;

      // Configure GA4 with your Measurement ID
      gtag('js', new Date());
      gtag('config', 'G-JJGD1XYQNP', { page_path: window.location.pathname });
    };

    return () => {
      // Cleanup script tag if the component is unmounted
      document.head.removeChild(script);
    };
  }, []);

  return null; // This component does not render anything
};

export default GoogleAnalytics;
