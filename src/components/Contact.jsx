import { useState } from "react";

function Contact() {
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);
        setStatus("Sending...");

        try {
            const formData = new FormData(event.target);

            formData.append(
                "access_key",
                import.meta.env.VITE_WEB3FORM_KEY
            );

            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const data = await response.json();

            if (data.success) {
                setStatus("✅ Message sent successfully!");
                event.target.reset();
            } else {
                setStatus("❌ Failed to send message.");
            }
        } catch (error) {
            console.error(error);
            setStatus("❌ Network error. Please try again.");
        }

        setLoading(false);
    };

    return (
        <section id="contact" className="py-24">
            <div className="max-w-4xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">
                        Let's Work Together
                    </h2>

                    <p className="text-slate-400">
                        Have a project idea, work opportunity, or just
                        want to say hello? Send me a message.
                    </p>
                </div>

                {/* Contact Form */}
                <form
                    onSubmit={onSubmit}
                    className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 shadow-[0_0_40px_rgba(34,211,238,0.08)]"
                >
                    {/* Hidden Fields */}
                    <input
                        type="hidden"
                        name="from_name"
                        value="Portfolio Contact Form"
                    />

                    <div className="grid md:grid-cols-2 gap-6">

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-cyan-400 transition"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-cyan-400 transition"
                        />

                    </div>

                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        required
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-cyan-400 transition"
                    />

                    <textarea
                        name="message"
                        rows="6"
                        placeholder="Your Message"
                        required
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-cyan-400 transition resize-none"
                    />

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">

                        <button
                            type="submit"
                            disabled={loading}
                            className="px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-semibold transition"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>

                        {status && (
                            <p
                                className={`text-sm ${status.includes("successfully")
                                    ? "text-green-400"
                                    : status.includes("Sending")
                                        ? "text-cyan-400"
                                        : "text-red-400"
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