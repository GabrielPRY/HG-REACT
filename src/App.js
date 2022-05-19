import "./css/normalize.css";
import "./css/index.css";
import "./css/mobile.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Form from "./components/Form";
import Footer from "./components/Footer";
import ListaTrabajos from "./components/ListaTrabajos";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Hero />
      <ListaTrabajos />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
