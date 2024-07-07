import Footer from './Footer';
import Nav from "./Nav";
import Products from './Products';
import SubHero from './SubHero';
import Hero from './Hero';
import '../app.css';

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <SubHero />
      <Products />
      <Footer />
    </>
  );
}

export default Home;
