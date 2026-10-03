import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 700);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const whatsappNumber = "919207420095"; // Change this number

  return (
    <>
      {/* WhatsApp */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="
          fixed
          bottom-5 left-5
          sm:bottom-7 sm:left-7
          z-[80]
          flex h-12 w-12
          sm:h-14 sm:w-14
          items-center justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-[0_8px_30px_rgba(37,211,102,0.28)]
          transition-all duration-300
          hover:scale-110
          hover:shadow-[0_12px_35px_rgba(37,211,102,0.38)]
          focus:outline-none
          focus:ring-4
          focus:ring-[#25D366]/20
        "
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <FaWhatsapp
          size={24}
          color="white"
          strokeWidth={2}
          className="sm:h-7 sm:w-7"
        />

        {/* Pulse */}
        <span
          className="
            absolute inset-0
            rounded-full
            bg-[#25D366]
            opacity-30
            animate-ping
            -z-10
          "
        />
      </motion.a>

      {/* Back to Top */}
      <AnimatePresence>
        {visible && (
          <motion.button
            type="button"
            aria-label="Back to top"
            onClick={scrollToTop}
            className="
              fixed
              bottom-5 right-5
              sm:bottom-7 sm:right-7
              z-[80]
              flex h-12 w-12
              sm:h-14 sm:w-14
              items-center justify-center
              rounded-full
              border border-slate-200
              bg-white
              text-blue-700
              shadow-[0_8px_30px_rgba(7,87,168,0.14)]
              transition-all duration-300
              hover:-translate-y-1
              hover:border-blue-500
              hover:shadow-[0_12px_35px_rgba(7,87,168,0.20)]
              focus:outline-none
              focus:ring-4
              focus:ring-blue-500/10
            "
            initial={{
              opacity: 0,
              scale: 0.7,
              y: 12,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.7,
              y: 12,
            }}
            transition={{
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <ArrowUp
              size={21}
              strokeWidth={2}
              className="sm:h-[22px] sm:w-[22px]"
            />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}