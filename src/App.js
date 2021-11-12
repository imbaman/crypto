import "./App.css";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import {
  Navbar,
  Home,
  Crypto,
  CryptoDetails,
  Exchanges,
  Layout,
} from "./components";
import { Container, CssBaseline, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/system";

const theme = createTheme({
  palette: {
    background: {
      main: "rgb(33, 33, 33)",
      second: "rgb(38,38,38)",
    },
    text: {
      primary: "rgb(255, 255, 255)",
      secondary: "rgb(255, 255, 255)",
    },
    action: {
      active: "#001E3C",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className='App'>
          <Navbar />
          <Layout>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/crypto'>
                <Crypto />
              </Route>
              <Route exact path='/crypto/:id'>
                <CryptoDetails />
              </Route>
              <Route exact path='/exchanges'>
                <Exchanges />
              </Route>
            </Switch>
          </Layout>
        </div>
      </Router>
      <Box>
        <Typography sx={{ bgcolor: "#D1E8E4", p: 2 }} align='center'>
          footer
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
