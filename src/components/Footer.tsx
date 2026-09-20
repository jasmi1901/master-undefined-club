import { useState } from "react";
import logo from "../assets/logo.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer id="contact" className="bg-[#031b3d] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Master Undefined Club" className="h-12 w-12 object-contain" />
            <div className="leading-none">
              <div className="text-xl font-black tracking-tight text-white">MASTERS</div>
              <div className="text-sm font-black tracking-tight text-white">UNDEFINED CLUB</div>
            </div>
          </div>

          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-300">
            Two Sports. One Club. Endless Possibilities.
          </p>

          <div className="mt-5 flex gap-3">
            <a
              href="https://www.facebook.com/share/1EkBSZBz8s/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Master Undefined Club on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-blue-600"
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="https://www.instagram.com/masters_undefined_if?igsi=aHcxMXQ1NDB6OHQ0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Master Undefined Club on Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-pink-600"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="https://youtube.com/@muif-s2q?si=9mL6Qtt45zw3XlK_i"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Master Undefined Club on YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-red-600"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white">Contact Us</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li>mastersundefined@gmail.com</li>
            <li>Stockholm, Sweden</li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-xl font-bold text-white">Newsletter</h3>
          <p className="mt-5 max-w-sm text-sm text-slate-300">
            Subscribe for updates on training, events and club news.
          </p>

          <form
            onSubmit={handleNewsletterSubmit}
            className="mt-5 max-w-md"
          >
            <div className="flex overflow-hidden rounded-md border border-white/20 bg-white/5">
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                required
                className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-300 outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 px-4 text-lg font-bold text-white transition hover:bg-blue-500"
              >
                →
              </button>
            </div>

            {subscribed && (
              <p className="mt-3 text-sm font-medium text-emerald-300">
                Thanks! Your email has been added to our newsletter.
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-sm text-slate-300">
        © 2026 Masters Undefined Club. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;