import { Header } from "../components/Header";
import { Start } from "../components/Start";
import heroImg from "../assets/barbershop-hero.jpg";

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
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
        </main>
      </div>
    </div>
  );
}
