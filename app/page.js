import Header from "./components/header";
import Banner from "./components/banner";
import Sobre from "./components/sobre";
import Invista from "./components/invista";
import Footer from "./components/footer";
import Faq from "./components/faq";
import Chamada from "./components/chamada";

export default function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <Sobre/>
      <Invista/>
      <Faq/>
      <Chamada/>
      <Footer/>
    </>
  );
}
