import Header from '@/components/Header';
import Footer from '@/sections/Footer';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="space-y-6 text-left">
            <p className="text-lg">Last updated: December 22, 2024</p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                1. Information We Collect
              </h2>
              <p>
                SVGFlow collects minimal information necessary to provide our
                services. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Basic usage data</li>
                <li>Device information</li>
                <li>Crash reports</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                2. How We Use Your Information
              </h2>
              <p>We use collected information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Improve our software</li>
                <li>Fix bugs and issues</li>
                <li>Enhance user experience</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">3. Data Storage</h2>
              <p>
                SVGFlow operates primarily offline. Any SVG files you view
                remain on your device and are not uploaded to our servers unless
                explicitly requested.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                4. Third-Party Services
              </h2>
              <p>
                We do not share your information with third parties except when
                necessary to provide our services or when required by law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">5. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact
                us through our website.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
