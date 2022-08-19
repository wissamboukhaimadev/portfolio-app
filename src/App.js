import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

import SnackbarProvider from 'react-simple-snackbar'

function App() {
  return (
    <div>
      <SnackbarProvider>
        <NavBar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        <SocialLinks />
      </SnackbarProvider>
    </div>
  );
}

export default App;
