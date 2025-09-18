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
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {title1} <span className="text-secondary">{title2}</span> {title3}
      </h1>

      <p className="text-white text-lg md:text-xl font-sans max-w-xl mb-6">
        {description}
      </p>

      <div className="flex gap-6">
        {infoItems.map((item, index) => (
          <p
            key={index}
            className="text-gray font-semibold mb-6 flex items-center gap-1"
          >
            <GiCheckMark size={18} />
            {item}
          </p>
        ))}
      </div>

      <div className="flex gap-8 flex-wrap justify-center">
        <button className="bg-secondary font-semibold text-lg text-primary px-14 py-2 rounded-2xl transition animate-pulse cursor-pointer">
          Agende horário
        </button>

        <button className="bg-transparent font-semibold text-lg border border-white text-white px-14 py-2 rounded-2xl hover:bg-white hover:text-black transition cursor-pointer">
          Nossos serviços
        </button>
      </div>

      <div className="absolute bottom-22 cursor-pointer">
        <FaArrowDown className="text-white text-3xl animate-bounce hover:text-secondary" />
      </div>
    </section>
  );
}
