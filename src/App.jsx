import Alunos from "./components/Alunos";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Problemas from "./components/Problemas";
import Professores from "./components/Professores";
import Space from "./components/ui/Space";

function App() {
  return (
    <section className="bg-white scroll-smooth min-h-screen w-screen"> 
      <Nav/>
      <Space/>
      <Hero/>
      <Problemas/>
      <Alunos/>
      <Professores/>
      <Footer/>
    </section>
  )
}

export default App;