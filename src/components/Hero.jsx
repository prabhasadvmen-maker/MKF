// src/components/Hero.jsx
import { motion } from "framer-motion";
import { CalendarDays, Phone, MessageCircle, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">

      {/* FULL SCREEN VIDEO — no blur, no heavy overlay */}
      <div className="absolute inset-0 z-0">
        <video
          src="/Hero section vedio.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
        {/* Very light overlay just for text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* NAVBAR */}
      <motion.header
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm"
      >
        <nav className="mx-auto flex max-w-[1450px] items-center justify-between px-6 py-3 lg:px-10">

          {/* LOGO */}
          <a href="#home" className="flex items-center group">
            <img
              src="/logo.jpeg"
              alt="MFK Studio Logo"
              className="h-11 w-11 lg:h-[50px] lg:w-[50px] rounded-full object-cover border border-white/30 transition-transform duration-300 group-hover:scale-105 shadow-sm"
            />
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-10 lg:flex">
            {["Home", "About", "Services", "Gallery", "Price List", "Contact"].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className={`relative text-[14px] font-medium transition-colors duration-300 hover:text-[#B88932] ${
                  index === 0 ? "text-[#B88932]" : "text-white"
                }`}
              >
                {item}
                {index === 0 && (
                  <span className="absolute -bottom-2 left-0 h-[1.5px] w-full bg-[#B88932]" />
                )}
              </a>
            ))}
          </div>

          {/* BOOK BUTTON */}
          <button
            onClick={() => window.dispatchEvent(new Event("openBookingModal"))}
            className="group hidden items-center gap-3 rounded-full bg-[#A87528] px-7 py-3.5 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#8F621F] lg:flex"
          >
            <CalendarDays size={18} />
            Book Appointment
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* MOBILE MENU */}
          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 lg:hidden">
            <span className="space-y-1.5">
              <span className="block h-[1.5px] w-5 bg-white" />
              <span className="block h-[1.5px] w-5 bg-white" />
              <span className="block h-[1.5px] w-5 bg-white" />
            </span>
          </button>

        </nav>
      </motion.header>

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1450px] items-center px-6 pb-24 pt-28 lg:px-10 lg:pb-32 lg:pt-32">

        <div className="flex flex-col justify-center max-w-[580px]">

          {/* TITLE */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-serif text-[55px] font-bold leading-[0.95] tracking-[0.02em] sm:text-[72px] lg:text-[90px] xl:text-[105px]"
          >
            <span className="bg-gradient-to-r from-[#B88932] via-[#D4AF37] to-[#8D6125] bg-clip-text text-transparent">
              MFK
            </span>
            <br />
            <span className="text-white">STUDIO</span>
          </motion.h1>

          {/* UNISEX SALON */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mt-6 flex items-center gap-4"
          >
            <span className="h-px w-12 bg-[#B88932]" />
            <span className="text-[14px] font-medium tracking-[0.35em] text-white/90">UNISEX SALON</span>
            <span className="h-px w-12 bg-[#B88932]" />
          </motion.div>

          {/* SERVICES */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.35 }}
            className="mt-4 text-[12px] tracking-[0.26em] text-white/75"
          >
            NAILS
            <span className="mx-3 text-[#B88932]">|</span>
            LASHES
            <span className="mx-3 text-[#B88932]">|</span>
            MAKEUP
            <span className="mx-3 text-[#B88932]">|</span>
            HAIR
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className="mt-9 flex flex-col sm:flex-row flex-wrap items-center gap-4"
          >
            <a
              href="#appointment"
              className="group flex items-center justify-center gap-3 rounded-full bg-[#A87528] px-7 py-4 text-sm font-medium text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#8E611F] w-full sm:w-auto"
            >
              <CalendarDays size={18} />
              Book Appointment
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="tel:+919311578400"
              className="flex items-center justify-center gap-3 rounded-full border border-white/50 bg-white/10 px-7 py-4 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 w-full sm:w-auto"
            >
              <Phone size={17} />
              Call Now
            </a>

            <a
              href="https://wa.me/919311578400"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#25D366] bg-white/10 text-[#25D366] backdrop-blur-sm transition-all duration-300 hover:bg-[#25D366] hover:text-white"
            >
              <MessageCircle size={21} />
            </a>
          </motion.div>

        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-5 left-10 z-20 hidden items-center gap-3 lg:flex text-white/60"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/40 pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-white"
          />
        </div>
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll Down</span>
        <span className="h-px w-10 bg-white/40" />
      </motion.div>

    </section>
  );
}
