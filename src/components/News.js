import "../style/news.css";
import React from "react";



import news from "../img/news/news.png";
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
        <div className="news-card ">
          <div className="news-card-icon">
            <img src={news} alt="news" />
          </div>
          <div className="card-titulo">
            <h3>Notícia</h3>
          </div>
          <div className="card-texto">
            <p className="text-muted">03 de outubro de 2022</p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit. Fusce tincidunt non ex non scelerisque. Duis 
              finibus scelerisque turpis.
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
        
         {/* card 1 */}
         <div className="news-card ">
          <div className="news-card-icon">
            <img src={news} alt="news" />
          </div>
          <div className="card-titulo">
            <h3>Notícia</h3>
          </div>
          <div className="card-texto">
            <p className="text-muted">03 de outubro de 2022</p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit. Fusce tincidunt non ex non scelerisque. Duis 
              finibus scelerisque turpis.
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

         {/* card 1 */}
         <div className="news-card ">
          <div className="news-card-icon">
            <img src={news} alt="news" />
          </div>
          <div className="card-titulo">
            <h3>Notícia</h3>
          </div>
          <div className="card-texto">
            <p className="text-muted">03 de outubro de 2022</p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit. Fusce tincidunt non ex non scelerisque. Duis 
              finibus scelerisque turpis.
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

         {/* card 1 */}
         <div className="news-card ">
          <div className="news-card-icon">
            <img src={blog} alt="news" />
          </div>
          <div className="card-titulo">
            <h3>Todas as notícias</h3>
          </div>
          <div className="card-texto">
            <p className="text-muted">03 de outubro de 2022</p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit. Fusce tincidunt non ex non scelerisque. Duis 
              finibus scelerisque turpis.
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
  );
}

export default News;
