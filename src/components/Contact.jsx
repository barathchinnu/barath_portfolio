import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";

import {
  MdEmail,
  MdLocationOn,
} from "react-icons/md";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

   try {
  await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      name: form.name,
      email: form.email,
      message: form.message,
      title: "Portfolio Contact",
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );

  alert("🚀 Message Sent Successfully!");
} catch (error) {
  console.error(error);
  alert("❌ Failed to send message");
}

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 relative z-10"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[6px]">
            Mission Control
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white mt-4">
            Contact Me
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Have a project idea, internship opportunity,
            or collaboration? Let's connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT CARD */}
          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-md
              p-10
            "
          >
            <h3 className="text-3xl font-black text-white">
              Get In Touch
            </h3>

            <div className="space-y-8 mt-10">

              <div className="flex items-center gap-5">
                <MdEmail
                  size={28}
                  className="text-cyan-400"
                />
                <div>
                  <p className="text-gray-400">
                    Email
                  </p>
                  <p className="text-white">
                    barathchinnu5@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaPhoneAlt
                  size={22}
                  className="text-cyan-400"
                />
                <div>
                  <p className="text-gray-400">
                    Phone
                  </p>
                  <p className="text-white">
                    +91 6369166195
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <MdLocationOn
                  size={28}
                  className="text-cyan-400"
                />
                <div>
                  <p className="text-gray-400">
                    Location
                  </p>
                  <p className="text-white">
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-12">

              <a
                href="https://github.com/barathchinnu"
                target="_blank"
                rel="noreferrer"
                className="
                  p-4
                  rounded-xl
                  border
                  border-white/10
                  hover:border-cyan-400
                  hover:text-cyan-400
                  transition
                "
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/barath-magendiran-93108930a"
                target="_blank"
                rel="noreferrer"
                className="
                  p-4
                  rounded-xl
                  border
                  border-white/10
                  hover:border-cyan-400
                  hover:text-cyan-400
                  transition
                "
              >
                <FaLinkedin size={24} />
              </a>

            </div>

            {/* Status */}
            <div
              className="
                mt-10
                p-4
                rounded-xl
                border
                border-green-500/20
                bg-green-500/10
              "
            >
            
            </div>
          </div>

          {/* RIGHT CARD */}
          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-md
              p-10
            "
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-black/30
                  border
                  border-white/10
                  outline-none
                  focus:border-cyan-400
                "
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-black/30
                  border
                  border-white/10
                  outline-none
                  focus:border-cyan-400
                "
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-black/30
                  border
                  border-white/10
                  outline-none
                  focus:border-cyan-400
                "
              />

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  py-4
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-400
                  to-fuchsia-500
                  text-black
                  font-black
                  hover:scale-[1.02]
                  transition-all
                  disabled:opacity-50
                "
              >
                {loading ? "SENDING..." : "SEND MESSAGE"}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}