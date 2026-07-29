import { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setStatus('Sending...');

    try {
      const formData = new FormData(event.target);

      formData.append('access_key', import.meta.env.VITE_WEB3FORM_KEY);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('✅ Message sent successfully!');
        event.target.reset();
      } else {
        setStatus('❌ Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      setStatus('❌ Network error. Please try again.');
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">Let's Work Together</h2>

          <p className="text-slate-400">
            Have a project idea, work opportunity, or just want to say hello?
            Send me a message.
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={onSubmit}
          className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-[0_0_40px_rgba(34,211,238,0.08)]"
        >
          {/* Hidden Fields */}
          <input
            type="hidden"
            name="from_name"
            value="Portfolio Contact Form"
          />

          <div className="grid gap-6 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 transition outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 transition outline-none focus:border-cyan-400"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 transition outline-none focus:border-cyan-400"
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="w-full resize-none rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 transition outline-none focus:border-cyan-400"
          />

          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
            <button
              type="submit"
              disabled={loading}
              className="cursor-pointer rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {status && (
              <p
                className={`text-sm ${
                  status.includes('successfully')
                    ? 'text-green-400'
                    : status.includes('Sending')
                      ? 'text-cyan-400'
                      : 'text-red-400'
                }`}
              >
                {status}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
