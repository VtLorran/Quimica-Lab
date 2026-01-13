import {
  BeakerIcon,
  Book,
  CirclePlus,
  File,
  FileText,
  LayoutDashboard,
  Lightbulb,
  Loader,
  Map,
  Search,
  UserCircle2,
} from "lucide-react";
import Cards from "../ui/Cards";

function ProfessoresFuncionalidades() {
  return (
    <section className=" h-auto p-10 w-100 md:w-200 xl:w-[80vw] mt-5 rounded-2xl items-center flex flex-col bg-[#eee7dc9e] ">
      <h1 className="font-bold text-2xl text-center">
        Funcionalidades Principais
      </h1>

      <div className="mt-8 flex xl:flex-row flex-col gap-5">
        <div className="flex flex-col gap-5">
          <Cards
            name={"Criação de Salas"}
            icon={<CirclePlus />}
            description={
              "Crie turmas, gere códigos de convite e defina regras pedagógicas. Configure se o Mapa de Conhecimento é obrigatório."
            }
          />

          <Cards
            name={"Gestão de Conteúdo"}
            icon={<FileText />}
            description={
              "Adicione livros, defina trilhas específicas para sua turma e crie atividades customizadas."
            }
          />

          <Cards
            name={"Dashboard da Turma"}
            icon={<LayoutDashboard />}
            description={
              "Visão macro com média geral, tópicos com mais erro e tendências de aprendizado em tempo real."
            }
          />
        </div>

        <div className="flex flex-col gap-5">
          <Cards
            name={"Análise Individual"}
            icon={<Search />}
            description={
              "Raio-X detalhado de cada aluno: evolução, conteúdos dominados, dificuldades e status de risco."
            }
          />

          <Cards
            name={"Ações Diretas"}
            icon={<UserCircle2 />}
            description={
              "Recomende revisões, libere exercícios extras ou envie avisos para alunos específicos com um clique."
            }
          />

          <Cards
            name={"Relatórios Exportáveis"}
            icon={<File />}
            description={
              "Gere relatórios de desempenho por aluno ou turma para documentação e planejamento pedagógico."
            }
          />
        </div>
      </div>
    </section>
  );
}

export default ProfessoresFuncionalidades;
