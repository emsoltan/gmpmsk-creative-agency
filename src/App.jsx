import React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/01-Header/navbar/Navbar";
import Hero from "./components/02-Hero/Hero";
import About from "./components/03-About/About";
import Services from "./components/04-Services/Services";
import Contact from "./components/06-Contact/Contact"
import Footer from "./components/07-Footer/Footer"
const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#b5179f",
        light: "#ea57d1",
        dark: "#810070",
      },
      secondary: {
        main: "#283674",
        light: "#575ea1",
        dark: "#001046",
      },
      warning: {
        main: "#f48c06",
        light: "#ffbd47",
        dark: "#bb5e00",
      },
      info: {
        main: "#273c4d",
        light: "#516679",
        dark: "#001625",
      },
      background: {
        paper: "#fffefb",
        default: "#fffefb",
      },
    },
    typography: {
      fontFamily: ["Lato", "cursive"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Navbar />{" "}
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
