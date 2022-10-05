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
              'url("https://cdn.pixabay.com/photo/2014/12/15/12/51/coffee-568968_960_720.jpg")',
            height: "500px",
            backgroundRepeat: "no-repeat center",
          }}
        >
          <div className="news-card-contend">
            <div className="card-titulo">
              <h3>Notícia</h3>
            </div>
            <div className="card-texto">
              <p className="text-danger">03 de outubro de 2022</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                tincidunt non ex non scelerisque. Duis finibus scelerisque
                turpis.
              </p>
            </div>
            <p className="form-text">tag: Programação, React Js</p>

            <a
              className="btn-news"
              href="#news"
              // target="_black"
            >
              Saiba mais...
            </a>
          </div>
        </div>
        {/* card 1 */}
        <div
          className="news-card "
          style={{
            backgroundImage:
              'url("https://i.pinimg.com/736x/e2/92/a4/e292a4bf4a346c450c79e18c09d59f1c.jpg")',
            height: "500px",
            backgroundRepeat: "no-repeat center",
          }}
        >
          <div className="news-card-contend">
            <div className="card-titulo">
              <h3>Notícia</h3>
            </div>
            <div className="card-texto">
              <p className="text-danger">03 de outubro de 2022</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                tincidunt non ex non scelerisque. Duis finibus scelerisque
                turpis.
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
              href="#news"
              // target="_black"
            >
              Saiba mais...
            </a>
          </div>
        </div>
        {/* card 1 */}
        <div
          className="news-card "
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1619953983867-eb8426ab271e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80")',
            height: "500px",
            backgroundRepeat: "no-repeat center",
          }}
        >
          <div className="news-card-contend">
            <div className="card-titulo">
              <h3>Notícia</h3>
            </div>
            <div className="card-texto">
              <p className="text-danger">03 de outubro de 2022</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                tincidunt non ex non scelerisque. Duis finibus scelerisque
                turpis.
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
              href="#news"
              // target="_black"
            >
              Saiba mais...
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
            backgroundRepeat: "no-repeat center",
          }}
        >
          <div className="news-card-contend">
            <div className="card-titulo">
              <h3>Todas as notícias</h3>
            </div>
            <div className="card-texto">
              <p className="text-danger">03 de outubro de 2022</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                tincidunt non ex non scelerisque. Duis finibus scelerisque
                turpis.
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
              tag: notícias
            </p>

            <a
              className="btn-news"
              href="#news"
              // target="_black"
            >
              Saiba mais...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
