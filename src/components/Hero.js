import React from "react";

import "../style/hero.css";

import digitando from "../video/gamer.mp4";

import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <div id="home" className="hero">
      <video className="videoTag" autoPlay loop muted>
        <source src={digitando} type="video/mp4" />
      </video>

      <div className="hero-texto">
        <h1>Oi! eu sou Diego </h1>
        <div className="digitando">
          <Typewriter
            options={{
              strings: ["Front-end", "Web Designer", "Design", "Programador"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p>⚠️Em construção⚠️</p>
      </div>
    </div>
  );
}

export default Hero;
