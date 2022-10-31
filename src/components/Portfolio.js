import "../style/portfolio.css";
import React from "react";

import qrcode from "../img/site/qrcode.png";
import citrus from "../img/site/citrus.jpg";
import comp from "../img/site/comp.jpg";
import drone from "../img/site/drone.jpg";
import skrillex from "../img/site/skrillex.jpg";
import spotfy from "../img/site/spotfy.jpg";
import design from "../img/site/design.png";
import freeseeds from "../img/site/freeseeds.png";
import blog from "../img/site/blog.png";

function Portfolio() {
  return (
    <div id="portfolio" className="portfolio">
      <div className="portfolio-titulo">
        <h1>Portfólio </h1>
      </div>
      <div className="portfolio-container">
        {/* card 7 */}
        <div className="portfolio-card ">
          <div className="card-icon">
            <img src={design} alt="design" />
          </div>
          <div className="card-titulo">
            <h3>
              <span className="new">New</span> Desing Portfólio
            </h3>
          </div>
          <div className="card-texto">
            <p>Portfólio para as artes criadas</p>
          </div>
          <p className="form-text">html5, Js, css e Bootstrap</p>

          <a
            className="btn-port"
            href="https://diegoroney.github.io/design/"
            target="_black"
          >
            Visite o site
          </a>
        </div>
        {/* card 8 */}
        <div className="portfolio-card ">
          <div className="card-icon">
            <img src={freeseeds} alt="Citru's" />
          </div>
          <div className="card-titulo">
            <h3>
              <span className="new">New</span> Free Seeds
            </h3>
          </div>
          <div className="card-texto">
            <p>Compartilhe o futuro</p>
          </div>
          <p className="form-text">React js</p>
          <a
            className="btn-port"
            href="https://diegoroney.github.io/freeseeds/"
            target="_black"
          >
            Visite o site
          </a>
        </div>
        {/* card 9 */}
        <div className="portfolio-card ">
          <div className="card-icon">
            <img src={blog} alt="Citru's" />
          </div>
          <div className="card-titulo">
            <h3>
              <span className="new">New</span> Blog
            </h3>
          </div>
          <div className="card-texto">
            <p>Blog em Next js</p>
          </div>
          <p className="form-text">Next js</p>
          <a
            className="btn-port"
            href="https://blog-diegoroney.vercel.app/"
            target="_black"
          >
            Visite o site
          </a>
        </div>
        {/* card 1 */}
        <div className="portfolio-card ">
          <div className="card-icon">
            <img src={qrcode} alt="qrcode" />
          </div>
          <div className="card-titulo">
            <h3>Qr Code</h3>
          </div>
          <div className="card-texto">
            <p>Gerador de Qrcode</p>
          </div>
          <p className="form-text">React Js</p>

          <a
            className="btn-port"
            href="https://diegoroney.github.io/qrcode-react/"
            target="_black"
          >
            Visite o site
          </a>
        </div>
        {/* card 2 */}
        <div className="portfolio-card ">
          <div className="card-icon">
            <img src={citrus} alt="Citru's" />
          </div>
          <div className="card-titulo">
            <h3>Citru's</h3>
          </div>
          <div className="card-texto">
            <p>Site para agricultura familiar</p>
          </div>
          <p className="form-text">html5, Js, css e Bootstrap</p>
          <a
            className="btn-port"
            href="https://diegoroney.github.io/newcitrus/index.html"
            target="_black"
          >
            Visite o site
          </a>
        </div>
        {/* card 3 */}
        <div className="portfolio-card ">
          <div className="card-icon">
            <img src={comp} alt="Computação" />
          </div>
          <div className="card-titulo">
            <h3>Ensino de Computação</h3>
          </div>
          <div className="card-texto">
            <p>Landing Page - Ensino de Computação</p>
          </div>
          <p className="form-text">html5, Js, css e Bootstrap</p>
          <a
            className="btn-port"
            href="https://diegoroney.github.io/cartilha-comput-page/"
            target="_black"
          >
            Visite o site
          </a>
        </div>
        {/* card 4 */}
        <div className="portfolio-card ">
          <div className="card-icon">
            <img src={drone} alt="qrcode" />
          </div>
          <div className="card-titulo">
            <h3>Drone X</h3>
          </div>
          <div className="card-texto">
            <p>Página do drone DJI Spark Fly (Alpine White)</p>
          </div>
          <p className="form-text">Less, Js e html5</p>
          <a
            className="btn-port"
            href="https://diegoroney.github.io/new-dronex/"
            target="_black"
          >
            Visite o site
          </a>
        </div>

        {/* card 5 */}
        <div className="portfolio-card">
          <div className="card-icon">
            <img src={skrillex} alt="qrcode" />
          </div>
          <div className="card-titulo">
            <h3>Skrillex e-sports</h3>
          </div>
          <div className="card-texto">
            <p>Página do time de e-ports Skrillex</p>
          </div>
          <p className="form-text">Js, html5 e css</p>
          <a
            className="btn-port"
            href="https://diegoroney.github.io/skrillex/"
            target="_black"
          >
            Visite o site
          </a>
        </div>

        {/* card 6 */}
        <div className="portfolio-card ">
          <div className="card-icon">
            <img src={spotfy} alt="qrcode" />
          </div>
          <div className="card-titulo">
            <h3>Spotfy - clone</h3>
          </div>
          <div className="card-texto">
            <p>Milhões de músicas e podcasts para explorar</p>
          </div>
          <p className="form-text">html5, Js, css e Bootstrap</p>
          <a
            className="btn-port"
            href="https://diegoroney.github.io/spotify-clone/"
            target="_black"
          >
            Visite o site
          </a>
        </div>
      </div>

      {/* <div className="vermais">
        <a href="https://blog-diegoroney.vercel.app/" target="_black">
          <h4>ver mais...</h4>
        </a>
      </div> */}
    </div>
  );
}

export default Portfolio;
