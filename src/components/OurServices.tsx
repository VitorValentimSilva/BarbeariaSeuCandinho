import { HiScissors } from "react-icons/hi2";
import { Service } from "./Service";

type OurServicesProps = {
  sectionName: string;
  title: string;
  description: string;
};

export function OurServices({
  sectionName,
  title,
  description,
}: OurServicesProps) {
  return (
    <section className="py-14">
      <div className="max-w-4/5 m-auto">
        <div className="flex flex-col gap-2 mb-6 text-center">
          <p className="text-secondary font-semibold text-2xl">{sectionName}</p>

          <h2 className="text-light text-5xl font-bold ">{title}</h2>
        </div>

        <div className="text-gray text-lg w-5xl text-center m-auto">
          <p>{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <Service
            icon={HiScissors}
            title="Cortes Modernos"
            description="Cortes masculinos tradicionais e modernos, sempre seguindo as últimas tendências"
            infoItems={[
              "Corte de cabelo personalizado",
              "Aparar barba e bigode",
              "Estilo e design de cabelo",
            ]}
            price="A partir de R$ 30"
            duration="30-45 minutos"
          />

          <Service
            icon={HiScissors}
            title="Cortes Modernos"
            description="Cortes masculinos tradicionais e modernos, sempre seguindo as últimas tendências"
            infoItems={[
              "Corte de cabelo personalizado",
              "Aparar barba e bigode",
              "Estilo e design de cabelo",
            ]}
            price="A partir de R$ 30"
            duration="30-45 minutos"
          />

          <Service
            icon={HiScissors}
            title="Cortes Modernos"
            description="Cortes masculinos tradicionais e modernos, sempre seguindo as últimas tendências"
            infoItems={[
              "Corte de cabelo personalizado",
              "Aparar barba e bigode",
              "Estilo e design de cabelo",
            ]}
            price="A partir de R$ 30"
            duration="30-45 minutos"
          />
        </div>
      </div>
    </section>
  );
}
