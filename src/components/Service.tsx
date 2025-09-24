import type { IconType } from "react-icons";
import { IoCheckmarkCircleOutline, IoTimeOutline } from "react-icons/io5";

type ServiceProps = {
  icon: IconType;
  title: string;
  description: string;
  infoItems: string[];
  price: string;
  duration: string;
};

export function Service({
  icon,
  title,
  description,
  infoItems,
  price,
  duration,
}: ServiceProps) {
  const MessageIcon = icon;

  return (
    <div className="bg-primary rounded-3xl p-6 mt-10 max-w-md m-auto">
      <div className="mb-4 bg-light/15 rounded-full flex items-center justify-center w-14 h-14 m-auto">
        <MessageIcon size={34} className="text-secondary" />
      </div>

      <div className="text-light text-justify flex flex-col gap-2 mb-6">
        <h3 className="text-2xl font-serif font-bold">{title}</h3>

        <p>{description}</p>
      </div>

      <div className="flex flex-col gap-2 mb-6">
        {infoItems.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <IoCheckmarkCircleOutline size={18} className="text-secondary" />

            <p className="text-gray">{item}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center font-semibold border-t border-gray pt-4">
        <p className="text-secondary text-lg">{price}</p>

        <div className="flex items-center gap-1 text-gray">
          <IoTimeOutline size={22} />

          <p>{duration}</p>
        </div>
      </div>
    </div>
  );
}
