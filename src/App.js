import "./App.css";

import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/footer";
import Servico from "./components/Servico";
import Sobre from "./components/Sobre";
import Portfolio from "./components/Portfolio";
import Contato from "./components/contato";
import News from "./components/News";

function App() {
  //? nav bar
  const [ativador, setAtivador] = useState(false);

  useEffect(function () {
    function posicaoScroll() {
      if (window.scrollY > 20) {
        setAtivador(true);
      } else {
        setAtivador(false);
      }
    }

    window.addEventListener("scroll", posicaoScroll);
  }, []);
  //! end nav bar
  return (
    <div>
      <Navbar acao={ativador} />
      <Hero />
      <Sobre />
      <Servico />
      <Portfolio />
      <News />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;