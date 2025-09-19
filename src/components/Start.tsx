import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";

type StartProps = {
  title1: string;
  title2?: string;
  title3?: string;
  description: string;
  infoItems: string[];
};

export function Start({
  title1,
  title2,
  title3,
  description,
  infoItems,
}: StartProps) {
  return (
    <section className="min-h-[90vh] sm:min-h-screen flex flex-col justify-start items-center text-center px-4 sm:px-6 lg:px-8 relative pt-20 sm:pt-50">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-snug"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {title1} <span className="text-secondary">{title2}</span> {title3}
      </motion.h1>

      <motion.p
        className="text-white text-base sm:text-lg md:text-xl font-sans max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {description}
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {infoItems.map((item, index) => (
          <motion.p
            key={index}
            className="text-gray font-semibold flex items-center justify-center sm:justify-start gap-1 text-sm sm:text-base md:text-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GiCheckMark size={18} />
            {item}
          </motion.p>
        ))}
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 flex-wrap justify-center">
        <motion.button
          className="bg-secondary font-semibold text-base sm:text-lg text-primary px-8 sm:px-10 md:px-14 py-2 sm:py-3 rounded-2xl cursor-pointer w-full sm:w-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Agende horário
        </motion.button>

        <motion.button
          className="bg-transparent font-semibold text-base sm:text-lg border border-white text-white px-8 sm:px-10 md:px-14 py-2 sm:py-3 rounded-2xl hover:bg-white hover:text-black transition cursor-pointer w-full sm:w-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Nossos serviços
        </motion.button>
      </div>

      <motion.div
        className="absolute bottom-20 sm:bottom-16 md:bottom-32 cursor-pointer"
        whileHover={{ scale: 1.2 }}
      >
        <FaArrowDown className="text-white text-3xl animate-bounce hover:text-secondary" />
      </motion.div>
    </section>
  );
}
