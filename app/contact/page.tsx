import Header from '@/components/Header';
import Footer from '@/sections/Footer';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="text-center md:text-left mb-12">
              <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg text-gray-500 mb-8">
                Have questions about SVGFlow? We&apos;d love to hear from you.
                Send us a message and we&apos;ll respond as soon as possible.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:hello@svgflow.app"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    hello@svgflow.app
                  </a>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">About SVGFlow</h2>
            <div className="space-y-4">
              <p>
                SVGFlow is a modern SVG viewer and manager designed to make
                working with SVG files simple and efficient. Our tool helps
                designers and developers seamlessly handle SVG assets with
                features like:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Powerful zoom capabilities</li>
                <li>Intuitive pan controls</li>
                <li>Detailed property inspection</li>
                <li>Offline support</li>
                <li>Large file handling</li>
              </ul>
              <p>
                Whether you&apos;re working on simple icons or complex
                illustrations, SVGFlow is here to streamline your workflow.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
