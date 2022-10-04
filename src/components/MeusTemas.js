import { createMuiTheme } from "material-ui/styles";
import purple from "material-ui/colors/purple";

export default createMuiTheme({
  palette: {
    primary: {
      // works
      main: "#165788",
      contrastText: "#fff",
    },
    secondary: {
      // works
      main: "#69BE28",
      contrastText: "#fff",
    },
    companyBlue: {
      backgroundColor: "#65CFE9",
      color: "#fff",
    },
    companyRed: {
      backgroundColor: "#E44D69",
      color: "#000",
    },
    accent: {
      backgroundColor: purple[500],
      color: "#000",
    },
  },
});
