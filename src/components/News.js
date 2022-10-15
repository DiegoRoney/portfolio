import "../style/news.css";
import React from "react";


function News() {
  return (
    <div id="news" className="news">
      <div className="news-titulo">
        <h1>Blog </h1>
      </div>
      <div className="info">Blog em construção⚠️</div>

      <div className="news-container">
        {/* card 1 */}
        <div
          className="news-card "
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1595079836278-25b7ad6d5ddb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
            height: "500px",
            backgroundSize:"contain", 
          }}
        >
          <div className="news-card-contend">
            <div className="card-titulo">
              <h3>Gerador de Qrcode</h3>
            </div>
            <div className="card-texto">
              <p className="text-muted">03 de outubro de 2022</p>
              <p>
              Web App desenvolvido para criação de códigos Qr.  <strong>COLE → GERE → BAIXE</strong>.
              <p>
              Para o desenvolvimento foram utilizadas as tecnologias: React js e a api Qrcode
              </p>


              </p>
            </div>
            <p className="form-text">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6h.008v.008H6V6z"
                />
              </svg>
              tag: Api, React Js</p>

            <a
              className="btn-news"
              href="https://blog-diegoroney.vercel.app/blog/11-10-22_qrcode"
              target="_black"
            >
              Leia mais...
            </a>
          </div>
        </div>
        {/* card 1 */}
        <div
          className="news-card "
          style={{
            backgroundImage:
              'url("https://img.freepik.com/fotos-gratis/conjunto-de-fruta-laranja-suculenta-fresca-sobre-a-natureza-verde_1150-17507.jpg?w=826&t=st=1665145856~exp=1665146456~hmac=3ee949c2a32264191a678c16af99f3c92623720f7fc70293a3c0771657eb3d67")',
            height: "500px",              
            backgroundSize:"contain",         
            // backgroundRepeat: "no-repeat center",
          }}
        >
          <div className="news-card-contend">
            <div className="card-titulo">
              <h3>Citru's</h3>
            </div>
            <div className="card-texto">
              <p className="text-muted">03 de outubro de 2022</p>
              <p>
              Pequeno e-commerce para encomendas de produtos da agricultura familiar. Nele o agricultor pode apresentar seus produtos e preços, além da disponibilidade de fazer encomendas.
              </p>
            </div>
            <p className="form-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6h.008v.008H6V6z"
                />
              </svg>
              tags
            </p>

            <a
              className="btn-news"
              href="https://blog-diegoroney.vercel.app/blog/10-10-22_Citrus"
              target="_black"
            >
              Leia mais...
            </a>
          </div>
        </div>
        {/* card 1 */}
        <div
          className="news-card "
          style={{
            backgroundImage:
              'url("https://img.freepik.com/fotos-gratis/parabens-voce-fez-um-teste-muito-bem_637285-8618.jpg?w=826&t=st=1665145531~exp=1665146131~hmac=36322c7855914b2b898d555c7d303d63211c93db8e60efab61915fceebf5b892")',
            height: "500px",
            backgroundSize:"contain", 
          }}
        >
          <div className="news-card-contend">
            <div className="card-titulo">
              <h3>Ensino de Computação</h3>
            </div>
            <div className="card-texto">
              <p className="text-muted">03 de outubro de 2022</p>
              <p>
              Landing Page para apresentação sobre o que é a Computação da Educação básica e sobre o que é necessário para implementação deste ensino na rede pública de ensino.
              </p>
            </div>
            <p className="form-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6h.008v.008H6V6z"
                />
              </svg>
              tag
            </p>

            <a
              className="btn-news"
              href="https://blog-diegoroney.vercel.app/blog/10-10-22"
              target="_black"
            >
              Leia mais...
            </a>
          </div>
        </div>
        {/* card 1 */}
        <div
          className="news-card "
          style={{
            backgroundImage:
              'url("https://img.myloview.com.br/quadros/mulher-feliz-usando-o-laptop-no-cafe-jovem-linda-sentada-em-uma-cafeteria-e-trabalhando-no-computador-700-99715801.jpg")',
            height: "500px",
            backgroundSize:"contain",  
          }}
        >
          <div className="news-card-contend">
            <div className="card-titulo">
              <h3>Todas as notícias</h3>
            </div>
            <div className="card-texto">
              <p className="text-muted">03 de outubro de 2022</p>
              <p>
              Todos os projetos desenvolvidos e/ou em desenvolvimento por mim, serão publicados no Blog, ele é um complemento deste Portfólio.
              <p className="text-warning"> Ainda não é possível acessa-lo, o Blog está em desenvolvimento.
                </p> 
              </p>
            </div>
            <p className="form-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6h.008v.008H6V6z"
                />
              </svg>
              tag: React, Nestjs
            </p>

            <a
              className="btn-news"
              href="https://blog-diegoroney.vercel.app/"
              target="_black"
            >
              Leia mais...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
