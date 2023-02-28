import Banner from "components/Banner";
import Footer from "components/Footer";
import Header from "components/Header";
import carousel from "assets/carousel.png";
import festival from "assets/festival_2.png";

function App() {
  return (
    <>
      <Header />
      <Banner image={carousel} text="Boas-vindas ao #CodeChella2023!" />
      <Banner image={festival} />
      <Footer />
    </>
  );
}

export default App;
