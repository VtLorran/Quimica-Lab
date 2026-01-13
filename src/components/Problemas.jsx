import { CheckCircle, CircleX } from "lucide-react";
import Check from "./ui/Check";

function Problemas() {
  return (
    <section id="problemas" className="w-full h-auto py-10 xl:py-0 xl:h-180 xl:mt-0 mt-15 flex justify-center items-center bg-[#eee7dc9e]">
      <div className="  h-[80%] w-[80%] items-center flex flex-col ">
        <div className="text-center">
          <h1 className="font-bold text-2xl">Problema & Solução</h1>
          <p className="">Entenda porque Química é diferente:</p>
        </div>

        <div className="mt-8 gap-5 flex flex-col items-center md:flex-row">
          <div className="bg-[#f6f6f6] shadow-xl h-120 w-90  xl:w-120 p-5 py-10 rounded-2xl">
            <div className="flex gap-2">
              <CircleX className="text-red-700" />
              <h1 className="font-semibold text-xl">Problemas Atuais</h1>
            </div>
            <p className="px-">Muitos estudantes passa por dificuldades em:</p>
            <div className="flex flex-col mt-6 gap-3">
              <Check label={"Organizar conteúdos de forma lógica"} />
              <Check label={"Identificar pré-requisitos antes de avançar"} />
              <Check label={"Receber feedback genérico sobre seus erros"} />
              <Check label={"Acompanhar seu progresso real"} />
            </div>
          </div>

          <div className="bg-[#f6f6f6] shadow-xl h-120 w-90  xl:w-120 p-5 py-10 rounded-2xl">
            <div className="flex gap-2">
              <CheckCircle className="text-green-700" />
              <h1 className="font-semibold text-xl">Soluções</h1>
            </div>
            <p className="px-">O Química Lab irá lhe ajudar com:</p>
            <div className="flex flex-col mt-6 gap-3">
              <Check label={"Mapa de conhecimento com dependências"} />
              <Check label={"Bloqueio de tópicos por pré-requisitos"} />
              <Check label={"Diagnóstico de lacunas de aprendizado"} />
              <Check label={"Sugestões personalizadas por desempenho"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Problemas;
