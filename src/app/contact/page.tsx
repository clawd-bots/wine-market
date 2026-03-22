"use client";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-dark mb-3">
          Get in Touch
        </h1>
        <p className="text-earth max-w-lg mx-auto">
          Have a question about a wine, need a recommendation, or just want to
          say hello? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Form */}
        <div className="bg-cream-light rounded-3xl p-8">
          <h2 className="font-serif text-2xl font-semibold text-dark mb-6">
            Send us a message
          </h2>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-earth mb-1.5">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-cream border border-earth-light/50 text-dark text-sm focus:outline-none focus:border-wine"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-earth mb-1.5">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl bg-cream border border-earth-light/50 text-dark text-sm focus:outline-none focus:border-wine"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-earth mb-1.5">
                Subject
              </label>
              <select className="w-full px-4 py-3 rounded-xl bg-cream border border-earth-light/50 text-dark text-sm focus:outline-none focus:border-wine">
                <option>General inquiry</option>
                <option>Wine recommendation</option>
                <option>Wholesale / Trade</option>
                <option>Press / Media</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-earth mb-1.5">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-cream border border-earth-light/50 text-dark text-sm focus:outline-none focus:border-wine resize-none"
                placeholder="Tell us what's on your mind..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3.5 rounded-full bg-gradient-to-r from-wine to-wine-bright text-cream-light font-medium text-sm hover:shadow-lg hover:shadow-wine/20 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Info & Map */}
        <div className="space-y-6">
          {/* Location */}
          <div className="bg-cream-light rounded-3xl p-8">
            <h2 className="font-serif text-2xl font-semibold text-dark mb-6">
              Visit Us
            </h2>
            <div className="space-y-4 text-sm text-earth">
              <div>
                <p className="font-medium text-dark mb-1">Address</p>
                <p>42 Rue du Vignoble</p>
                <p>75006 Paris, France</p>
              </div>
              <div>
                <p className="font-medium text-dark mb-1">Hours</p>
                <p>Monday – Friday: 10:00 – 19:00</p>
                <p>Saturday: 10:00 – 20:00</p>
                <p>Sunday: 12:00 – 17:00</p>
              </div>
              <div>
                <p className="font-medium text-dark mb-1">Contact</p>
                <p>hello@thewinemarket.com</p>
                <p>+33 1 42 68 00 00</p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-earth-light/20 rounded-3xl aspect-video flex items-center justify-center">
            <div className="text-center">
              <span className="text-4xl block mb-2">📍</span>
              <p className="text-sm text-earth">
                Interactive map coming soon
              </p>
              <p className="text-xs text-earth-mid mt-1">
                42 Rue du Vignoble, Paris
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
