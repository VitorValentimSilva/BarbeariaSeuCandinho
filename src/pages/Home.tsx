import { Header } from "../components/Header";
import { Start } from "../components/Start";
import heroImg from "../assets/barbershop-hero.jpg";
import { AboutUs } from "../components/AboutUs";
import { LiaCertificateSolid } from "react-icons/lia";
import { OurServices } from "../components/OurServices";

export default function Home() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10">
        <Header
          title1="Seu Candinho "
          title2="Barbearia"
          navItems={["Home", "Serviços", "Contato"]}
        />

        <main>
          <Start
            title1="Seu "
            title2="estilo "
            title3="começa aqui"
            description="Na Elite Barber Shop, transformamos seu visual com técnicas modernas e o melhor atendimento. Cortes exclusivos, barbas impecáveis e cuidados especializados para o homem contemporâneo."
            infoItems={[
              "Cortes modernos e clássicos",
              "Barbas estilizadas",
              "Atendimento personalizado",
            ]}
          />

          <AboutUs
            sectionName="Sobre nós"
            title="Tradição e modernidade em cada corte"
            description={[
              "Na Seu Candinho Barbearia, nossa missão é proporcionar uma experiência única de cuidado e estilo para homens modernos. Combinamos técnicas tradicionais de barbearia com as tendências contemporâneas para oferecer cortes de cabelo e barba que realçam sua personalidade.",
              "Nossa equipe de barbeiros experientes está comprometida em entender suas preferências e necessidades, garantindo um atendimento personalizado em um ambiente acolhedor e sofisticado. Valorizamos a qualidade, o conforto e a satisfação do cliente, fazendo da sua visita um momento especial.",
              "Venha nos visitar e descubra por que a Seu Candinho Barbearia é o destino preferido para homens que buscam excelência em cuidados pessoais. Estamos aqui para ajudar você a expressar seu melhor estilo com confiança e autenticidade.",
            ]}
            highlights={[
              {
                icon: LiaCertificateSolid,
                value: "15+",
                label: "anos de experiência",
              },
              {
                icon: LiaCertificateSolid,
                value: "5000+",
                label: "clientes satisfeitos",
              },
              {
                icon: LiaCertificateSolid,
                value: "100%",
                label: "satisfação garantida",
              },
              {
                icon: LiaCertificateSolid,
                value: "100%",
                label: "satisfação garantida",
              },
              {
                icon: LiaCertificateSolid,
                value: "100%",
                label: "satisfação garantida",
              },
            ]}
            image="https://d2zdpiztbgorvt.cloudfront.net/region1/br/284784/biz_photo/87876a7b44ae487aac735fa4e3432a-barbearia-estevao-dos-cortes-biz-photo-bea0519938114779a32165272217e7-booksy.jpeg?size=640x427"
            message={{
              icon: LiaCertificateSolid,
              value: "Prêmios e Reconhecimentos",
              label: "Reconhecida por excelência em serviços de barbearia",
            }}
          />

          <OurServices
            sectionName="Nossos Serviços"
            title="Cuidados completos para o homem moderno"
            description="Oferecemos uma gama completa de serviços de barbearia, desde cortes de cabelo modernos e clássicos até cuidados especializados com a barba. Nossos barbeiros experientes utilizam técnicas avançadas para garantir que cada cliente saia satisfeito e com um visual impecável."
          />
        </main>
      </div>
    </div>
  );
}
