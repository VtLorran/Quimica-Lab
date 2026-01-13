import { BeakerIcon, Book, LayoutDashboard, Lightbulb, Loader, Map } from "lucide-react";
import Cards from "../ui/Cards";

function AlunosFuncionalidades() {
  return (
    <section className=" h-auto p-10 w-100 md:w-200 xl:w-[80vw] mt-5 rounded-2xl items-center flex flex-col bg-[#eee7dc9e] ">
      <h1 className="font-bold text-2xl text-center">
        Funcionalidades Principais
      </h1>

      <div className="mt-8 flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col gap-5">
          <Cards
            name={" Dashboard Inteligente"}
            icon={<LayoutDashboard />}
            description={
              "Visualize seu progresso geral, nível atual e sugestões de estudo personalizadas baseadas em seu desempenho."
            }
          />
          <Cards
            name={" Modo Foco"}
            icon={<Book />}
            description={
              "Interface limpa e sem distrações para consumo de conteúdo teórico. Ferramentas de anotação e marca-texto incluídas."
            }
          />
          <Cards
            name={" Definições Instantâneas"}
            icon={<Lightbulb />}
            description={
              "Pop-ups com definições de termos técnicos contextualizados ajudam na compreensão imediata."
            }
          />
        </div>
                <div className="flex flex-col gap-5">
          <Cards
            name={"  Mapa de Conhecimento"}
            icon={<Map />}
            description={
              "Visualize a jornada completa da Química com dependências entre tópicos. Saiba exatamente o que aprender próximo."
            }
          />
          <Cards
            name={"  Laboratório de Exercícios"}
            icon={<BeakerIcon />}
            description={
              "Feedback inteligente que vai além da resposta correta. Identifica suas lacunas conceituais e sugere revisões."
            }
          />
          <Cards
            name={"Progresso Visível"}
            icon={<Loader />}
            description={
              "Acompanhe sua evolução com gráficos claros e métricas que mostram domínio de cada tópico."
            }
          />
        </div>
      </div>
    </section>
  );
}

export default AlunosFuncionalidades;
