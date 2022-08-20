import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import './App.css'

import SnackbarProvider from 'react-simple-snackbar'

function App() {
  return (
    <div>
      <SnackbarProvider>
        <a href="https://wa.me/212615287447" class="whatsapp_float" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>
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
