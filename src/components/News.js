import "../style/news.css";
import React from "react";

// import news from "../img/news/news.png";
import blog from "../img/news/blog.jpeg";

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
              tincidunt non ex non scelerisque. Duis finibus scelerisque turpis.
            </p>
          </div>
          <p className="form-text">tag</p>

          <a
            className="btn-port"
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
              'url("https://cdn.pixabay.com/photo/2013/10/18/07/44/network-197303_960_720.jpg")',
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
              tincidunt non ex non scelerisque. Duis finibus scelerisque turpis.
            </p>
          </div>
          <p className="form-text">tag</p>

          <a
            className="btn-port"
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
              'url("https://cdn.pixabay.com/photo/2017/08/01/22/15/imac-2568270_960_720.jpg")',
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
              tincidunt non ex non scelerisque. Duis finibus scelerisque turpis.
            </p>
          </div>
          <p className="form-text">tag</p>

          <a
            className="btn-port"
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
            <h3>Todas as notícia</h3>
          </div>
          <div className="card-texto">
          <p className="text-danger">03 de outubro de 2022</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tincidunt non ex non scelerisque. Duis finibus scelerisque turpis.
            </p>
          </div>
          <p className="form-text">tag</p>

          <a
            className="btn-port"
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
