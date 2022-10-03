//import React from "react";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
//import CardMedia from "@mui/material/CardMedia";
//import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "../style/blog.css";

import newsimg from "../img/news/news.jpg"

function Blog() {
  return (
    <div id="blog" className="blog">
      <h2>Blog</h2>
      <br></br>
      <div className="info">Blog em construção⚠️</div>

    <div className="cards">

    
      {/* card */}
      <Card sx={{ maxWidth: 345 }}>        
            
            <img src={newsimg} alt="Noticia img" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Notícias
              </Typography>
              <Typography gutterBottom variant="date" component="div">
                03 de outubro de 2022
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit. Fusce tincidunt non ex non scelerisque. Duis 
              finibus scelerisque turpis.
              </Typography>
            </CardContent>
            <CardActions>              
              <div className="btn-port">Saiba mais</div>
            </CardActions>
          </Card>
          
           {/* card */}
      <Card sx={{ maxWidth: 345 }}>        
            
            <img src={newsimg} alt="Noticia img" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Notícias
              </Typography>
              <Typography gutterBottom variant="date" component="div">
                03 de outubro de 2022
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit. Fusce tincidunt non ex non scelerisque. Duis 
              finibus scelerisque turpis.
              </Typography>
            </CardContent>
            <CardActions>
            <div className="btn-port">Saiba mais</div>
              
            </CardActions>
          </Card>

           {/* card */}
      <Card sx={{ maxWidth: 345 }}>        
            
            <img src={newsimg} alt="Noticia img" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Notícias
              </Typography>
              <Typography gutterBottom variant="date" component="div">
                03 de outubro de 2022
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit. Fusce tincidunt non ex non scelerisque. Duis 
              finibus scelerisque turpis.
              </Typography>
            </CardContent>
            <CardActions>
            <div className="btn-port">Saiba mais</div>
              
            </CardActions>
          </Card>

           {/* card */}
      <Card sx={{ maxWidth: 345 }}>        
            
            <img src={newsimg} alt="Noticia img" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Todas Notícias
              </Typography>
              <Typography gutterBottom variant="date" component="div">
                03 de outubro de 2022
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit. Fusce tincidunt non ex non scelerisque. Duis 
              finibus scelerisque turpis.
              </Typography>
            </CardContent>
            <CardActions>
            <div className="btn-port">Saiba mais</div>
              
            </CardActions>
          </Card>
       
       

          </div>
          
      </div>
    
  );
}

export default Blog;
