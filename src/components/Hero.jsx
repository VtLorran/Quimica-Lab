import logo from "../assets/Logo PNG.png";

function Hero() {
  function scrollToSection(id) {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <section
      id="inicio"
      className="w-full h-160 flex justify-center items-center"
    >
      <div className="bg-[#eee7dc9e] h-auto w-full  md:h-[85%]  md:w-180 xl:w-[80%] flex-col flex  md:flex-row">
        <div className="flex flex-col gap-7 p-5 xl:p-10 justify-center">
          <h1 className="font-bold xl:text-5xl text-2xl  w-80 xl:w-160 ">
            Estude Química de forma clara, organizada e inteligente.
          </h1>
          <p className=" w-88 xl:w-160">
            A plataforma que reúne livros, materiais didáticos e conteúdos
            estruturados para seu aprendizado. Com mapa de conhecimento
            inteligente e classes personalizadas
          </p>

          <div className="flex gap-3 xl:gap-5">
            <button
              onClick={() => scrollToSection("alunos")}
              className="bg-[#228B4E] cursor-pointer text-white w-40 py-3 font-semibold rounded-lg hover:bg-[#2FA857]"
            >
              Sou Aluno
            </button>
            <button 
            onClick={() => scrollToSection("professores")}
            className="border-2 border-[#228B4E] text-[#2FA857] cursor-pointer w-40 py-3 font-semibold rounded-lg hover:bg-[#228B4E] hover:text-white transition">
              Sou Professor
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img className=" xl:mb-0 mb-10 xl:h-110 " src={logo} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
