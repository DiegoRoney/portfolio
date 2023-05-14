import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import "../style/sobre.css";

import logo1 from "../img/icons/javascript.png";
import logo2 from "../img/icons/atom.png";
import logo3 from "../img/icons/icon-github.png";
import logo4 from "../img/icons/html.png";
import logo5 from "../img/icons/css3.png";
import logo6 from "../img/icons/bootstrap.png";
import logo7 from "../img/icons/photoshop.png";
import logo8 from "../img/icons/illustrator.png";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor=""
          aria-label="secondary"
        >
          <Tab label="Habilidades" wrapped {...a11yProps(0)} />
          <Tab label="Experiência" wrapped {...a11yProps(1)} />
          <Tab label="Educação" wrapped {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="habilidades text-muted">
          <p>
            <span> DESIGN </span> - Nível avançado com softwares de edição de
            imagem e vídeo (Suite Adobe®).
          </p>
          <p>
            <span> PROGRAMAÇÃO </span> - Desenvolvedor Front-end.
          </p>
          <p>
            Principais <span>TECNOLOGIAS</span>
          </p>
          <p></p>

          <div className="skill">
            <div className="skills">
              <img src={logo1} alt="logo" />
              <br></br>
              Javascript
            </div>
            <div className="skills">
              <img src={logo2} alt="logo" />
              <br></br>
              React
            </div>
            <div className="skills">
              <img src={logo3} alt="logo" />
              <br></br>
              Github
            </div>
            <div className="skills">
              <img src={logo4} alt="logo" />
              <br></br>
              Html5
            </div>
            <div className="skills">
              <img src={logo5} alt="logo" />
              <br></br>
              CSS3
            </div>
            <div className="skills">
              <img src={logo6} alt="logo" />
              <br></br>
              Bootstrap
            </div>
            <div className="skills">
              <img src={logo7} alt="logo" />
              <br></br>
              Photoshop
            </div>
            <div className="skills">
              <img src={logo8} alt="logo" />
              <br></br>
              Illustrator
            </div>
          </div>
        </div>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <div className="experiencia text-muted">
          <p>
            Secretário Escolar - PMC<br></br>2011 – Atual
          </p>
          <p>
            Designer Gráfico Freelancer<br></br>2018 – Atual
          </p>
          <p>
            TI - Biscoitos Condeúba <br></br>2011 - 2013
          </p>
          <p>
            Instrutor - Ensino de Informática <br></br> 2001 – 2002
          </p>
        </div>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <div className="Formacao text-muted">
          <p>
            Graduado em <span>COMPUTAÇÃO</span> UFPB<br></br> 2017-2022.
          </p>
          {/* <p>
            Programando o Futuro | Dock Tech<br></br> 2022
          </p> */}
        </div>
      </TabPanel>
    </Box>
  );
}
