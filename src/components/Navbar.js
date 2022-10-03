import { useState } from "react";
import "../style/navbar.css";
import LogoDiego from "../img/icons/redes/d-diego.png";

export default function Navbar({ acao }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className={acao ? "navegacao1" : "navegacao"}>
      <div className="marca-name">
        <a href="#home">
          <img src={LogoDiego} alt="logo" />
        </a>
      </div>
      {/*! botoes botoes */}
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ffffff"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div
        className={isNavExpanded ? "navegacao-menu expanded" : "navegacao-menu"}
      >
        <ul>
          <button
            className="hamburgerX"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#servico">Serviço</a>
          </li>
          <li>
            <a href="#portfolio">Portfólio</a>
          </li>
          <li>
            <a href="#news">Blog</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
