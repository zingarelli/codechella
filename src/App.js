import Banner from "components/Banner";
import Footer from "components/Footer";
import Header from "components/Header";
import carousel from "assets/carousel.png";
import festival from "assets/festival_2.png";
import fans from "assets/fans.png";
import MainArticle from "components/MainArticle";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <Banner image={carousel} text="Boas-vindas ao #CodeChella2023!" />
      <main className={styles.container}>
        <MainArticle
          image={fans}
          alt='fãs cantando na pista'
          title={`< 11 e 12 de Março >\nAluródromo de São Paulo`}
        >
          <p>Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!</p>
          <p>Componente de Botão</p>
        </MainArticle>
      </main>
      <Banner image={festival} />
      <Footer />
    </>
  );
}

export default App;
