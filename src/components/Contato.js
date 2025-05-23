import "../style/contato.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

import * as ReactDOM from "react-dom";

function Contato() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Você deixou algum campo vazio");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };
    emailjs
      .send(
        "service_c61rw18",
        "template_lo19lh4",
        templateParams,
        "74u9PELDF69X2hsHk"
      )
      .then(
        (response) => {
          const root = ReactDOM.createRoot(
            document.getElementById("mensagemenviada")
          );
          const element = <h3>Mensagem enviada!</h3>;
          root.render(element);

          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("ERRO: ", err);
        }
      );
  }
  return (
    <div id="contato" className="contato">
      <div className="container">
        <form className="form" onSubmit={sendEmail}>
          <h2 className="title text-center">Contato</h2>
          <p>
            Vamos embarcar juntos em uma jornada de desenvolvimento inovador!
            Conecte-se por e-mail, enviando uma mensagem
            para <span>diego-roney@outlook.com</span>. Estou ansioso para
            colaborar com você e criar algo incrível!
          </p>

          <p>Ou me envie uma mensagem!</p>

          <input
            className="input"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            className="input"
            type="email"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <textarea
            className="textarea"
            rows="5"
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <input className="button" type="submit" value="Enviar" />

          <div id="mensagemenviada" className="msg-send text-center"></div>
        </form>
      </div>
    </div>
  );
}

export default Contato;
