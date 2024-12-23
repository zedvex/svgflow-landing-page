import Header from '@/components/Header';
import Footer from '@/sections/Footer';

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
          <div className="space-y-6 text-left">
            <p className="text-lg">Last updated: December 22, 2024</p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
              <p>
                By accessing and using SVGFlow, you agree to be bound by these
                Terms and Conditions. If you do not agree with any part of these
                terms, please do not use our service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">2. Use License</h2>
              <p>
                SVGFlow grants you a personal, non-exclusive, non-transferable
                license to use our software for viewing and managing SVG files.
                This license is subject to these Terms and Conditions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">3. Restrictions</h2>
              <p>You may not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or distribute the software</li>
                <li>Reverse engineer or decompile the software</li>
                <li>Remove any copyright or proprietary notices</li>
                <li>Use the software for any illegal purpose</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">4. Updates and Changes</h2>
              <p>
                We reserve the right to modify or discontinue the service at any
                time. We may also update these terms as needed. Continued use of
                SVGFlow after changes constitutes acceptance of new terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">5. Contact</h2>
              <p>
                For questions about these Terms and Conditions, please contact
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
