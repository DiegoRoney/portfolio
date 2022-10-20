import React from "react";
import "../style/footer.css";

import iconDiego from "../img/icons/redes/icon-diego.png";
import iconEmail from "../img/icons/redes/icon-email.png";
import iconGituhub from "../img/icons/redes/icon-github.png";
import iconIn from "../img/icons/redes/icon-in.png";
import iconIg from "../img/icons/redes/icon-instagram.png";
import iconTel from "../img/icons/redes/tel.png";

import logoDiegoInc from "../img/icons/redes/diego-inc.png";

// import logoDiegoProgramming from "../img/icons/redes/diego-pro-w.png";
// import logoDiegoDesign from "../img/icons/redes/diego-design-w.png";

function Footer() {
  return (
    <div className="footer">
      <section className="container-redes">
        <div className="container-redes-texto">
          Conect-se com minhas redes sociais:
        </div>
        <div className="container-redes-redes">
          {/* portfólio */}
          <a
            className="links-redes"
            href="https://diegoroney.github.io/portfolio"
            target="_black"
          >
            <img src={iconDiego} alt="logo" />
          </a>
          {/* email */}
          <a
            className="links-redes"
            href="mailto:diego-roney@outlook.com?"
            target="_black"
          >
            <img src={iconEmail} alt="logo" />
          </a>
          {/* Github */}
          <a
            className="links-redes"
            href="https://github.com/DiegoRoney"
            target="_black"
          >
            <img src={iconGituhub} alt="logo" />
          </a>
          {/* In */}
          <a
            className="links-redes"
            href="https://github.com/DiegoRoney"
            target="_black"
          >
            <img src={iconIn} alt="logo" />
          </a>
          {/* Ig */}
          <a
            className="links-redes"
            href="https://www.instagram.com/rbs_diego/"
            target="_black"
          >
            <img src={iconIg} alt="logo" />
          </a>
          {/* tel */}
          <a
            className="links-redes"
            href="https://api.whatsapp.com/send?phone=5577992028886"
            target="_black"
          >
            <img src={iconTel} alt="logo" />
          </a>
          {/* end redes icons */}
        </div>
      </section>

      <section className="container-colunas">
        <div className="container-colunas-item">
          <h5>LINKS</h5>
          <a href="#portfolio">
            <p>Portfólio</p>
          </a>
          <a href="https://blog-diegoroney.vercel.app/">
            <p>Blog</p>
          </a>
          {/* <p>item</p> */}
        </div>

        <div className="container-colunas-item">
          <h5>CONTATO</h5>
          <p>Brasil - Condeúba - BA</p>
          <p>diego-roney@hotmail.com</p>
          <p>diego-roney@outlook.com</p>
        </div>

        <div className="container-colunas-item">
          <img src={logoDiegoInc} alt="logo2" />  

          {/* <img src={logoDiegoProgramming} alt="logo2" />
          <img src={logoDiegoDesign} alt="logo2" /> */}

        </div>
      </section>

      <div className="container-copyright">
        <p>
          <a href="#hero">© 2022 Copyright: Diego</a>
        </p>

        <div className="up-page">
          <a href="#home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
