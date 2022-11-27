import { Navbar } from "./components";
import { About, Header, Footer, Skills, Work, Testimonials } from "./container";
import "./App.scss";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
