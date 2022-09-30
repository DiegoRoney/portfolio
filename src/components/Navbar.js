import { useState } from "react";
import "../style/navbar.css";
import LogoDiego from "../img/icon-diego.ico";

export default function Navbar({ acao }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className={acao ? "navegacao1" : "navegacao"}>
      <div className="marca-name">
        <a href="#home">
          <img src={LogoDiego} alt="logo" />
          DIEGO
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
            d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
          />
        </svg>

        {/* <svg
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
        </svg> */}
      </button>
      <div
        className={isNavExpanded ? "navegacao-menu expanded" : "navegacao-menu"}
      >
        <ul>
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
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
