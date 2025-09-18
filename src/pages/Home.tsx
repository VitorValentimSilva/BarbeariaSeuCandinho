import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Header
        title1="Seu Candinho "
        title2="Barbearia"
        navItems={["Home", "Serviços", "Contato"]}
      />
    </>
  );
}
