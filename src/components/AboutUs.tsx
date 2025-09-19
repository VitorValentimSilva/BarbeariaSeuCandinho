import type { IconType } from "react-icons";
import { motion } from "framer-motion";

type Highlight = {
  icon: IconType;
  value: string;
  label: string;
};

type AboutUsProps = {
  sectionName: string;
  title: string;
  description: string[];
  highlights: Highlight[];
  image: string;
  message: Highlight;
};

export function AboutUs({
  sectionName,
  title,
  description,
  highlights,
  image,
  message,
}: AboutUsProps) {
  const MessageIcon = message.icon;

  return (
    <section className="bg-primary rounded-t-3xl py-14">
      <div className="flex items-center justify-between m-auto w-full max-w-4/5 gap-28">
        <motion.div
          className="text-justify"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-2 mb-6">
            <p className="text-secondary font-semibold text-2xl">
              {sectionName}
            </p>

            <h2 className="text-light text-4xl font-bold">{title}</h2>
          </div>

          <div className="text-gray text-lg">
            {description.map((item, index) => (
              <motion.p
                key={index}
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {item}
              </motion.p>
            ))}
          </div>

          <div className="flex gap-10 flex-wrap justify-between w-3/4 mt-6 m-auto">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="flex flex-col"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 text-secondary">
                    <Icon size={32} />
                    <p className="text-2xl font-bold">{item.value}</p>
                  </div>
                  <p className="text-gray text-sm">{item.label}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={image}
            alt="Barbeiro cortando cabelo de um cliente"
            className="w-full h-auto rounded-lg shadow-lg"
          />

          <motion.div
            className="absolute -bottom-6 -left-10 bg-white/15 backdrop-blur-md text-secondary p-4 rounded-xl shadow-lg w-80"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <MessageIcon className="text-secondary" size={22} />
                <p className="font-bold">{message.value}</p>
              </div>
              <p className="text-gray-200 text-sm">{message.label}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
