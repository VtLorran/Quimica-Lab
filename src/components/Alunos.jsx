import { useState } from "react";
import AlunosFuncionalidades from "./Alunos/AlunosFuncionalidade";
import AlunosTrilha from "./Alunos/AlunosTrilha";

function Alunos() {
  const [ativo, setAtivo] = useState("");

  return (
    <section id="alunos" className="bg-white h-auto mt-10 min-h-80 w-full flex justify-center items-center">
      <div className=" h-[80%] w-[80%] items-center flex flex-col ">
        <div>
          <h1 className="font-bold text-2xl text-center">
            Para Alunos- Química Lab
          </h1>
          <p className="text-center">
            Sua jornada de aprendizado personalizada em Química
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
            Trilha de estudos 
          </button>
        </div>

        {ativo === "problema" && <AlunosFuncionalidades />}

        {ativo === "solucao" && (
            <AlunosTrilha/> 
        )}
      </div>
    </section>
  );
}

export default Alunos;
