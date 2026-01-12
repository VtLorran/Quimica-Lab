import { useState } from "react";
import ProfessoresFuncionalidades from "./Professores /ProfessoresFuncionalidades";
import ProfessoresSalas from "./Professores /ProfessoresSalas";

function Professores() {
  const [ativo, setAtivo] = useState("");
  return (
    <section id="professores" className="w-full mt-12 h-auto min-h-80 flex justify-center items-center bg-[#eee7dc9e]">
      <div className=" h-[80%] w-[80%] mt-10 items-center flex flex-col ">
        <div>
          <h1 className="font-bold text-2xl text-center">
            Para Professores - Química Class
          </h1>
          <p className="text-center">
            Ferramentas poderosas para gerenciar turmas e personalizar o ensino
          </p>
        </div>
        <div className="w-full gap-10 text-lg flex mt-5 border-b border-black/30">
          <button
            onClick={() => setAtivo("problema")}
            className={`py-4 border-b cursor-pointer ${
              ativo === "problema" ? "border-[#228B4E]" : "border-b-0"
            }`}
          >
            Funcionalidades
          </button>
          <button
            onClick={() => setAtivo("solucao")}
            className={`py-4 border-b cursor-pointer ${
              ativo === "solucao" ? "border-[#228B4E]" : "border-b-0"
            }`}
          >
            Criar Classes
          </button>
        </div>

        {ativo === "problema" && <ProfessoresFuncionalidades />}

        {ativo === "solucao" && <ProfessoresSalas />}
      </div>
    </section>
  );
}

export default Professores;
