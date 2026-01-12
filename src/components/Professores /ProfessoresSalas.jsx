import CardClass from "../ui/CardClass";

function ProfessoresSalas() {
  return (
    <section className=" h-auto p-10 w-[80vw] mt-5 rounded-2xl items-center flex flex-col gap-3 bg-[#eee7dc9e] ">
      <h1 className="font-bold text-2xl">Criar Classes</h1>
      <div className="flex gap-6 mt-5">
        <CardClass
          name={"Criação de turmas personalizadas"}
          description={
            "O professor pode criar salas para diferentes séries, turmas ou conteúdos específicos."
          }
        />
        <CardClass
          name={"Códigos de convite automáticos"}
          description={
            "Cada sala possui um código único para entrada dos alunos, facilitando o acesso."
          }
        />
        <CardClass
          name={"Controle de entrada de alunos"}
          description={
            "O professor pode permitir ou bloquear novas entradas na sala a qualquer momento."
          }
        />
        <CardClass
          name={"Regras pedagógicas"}
          description={
            "Define como o aluno avança no conteúdo, garantindo uma progressão organizada."
          }
        />
      </div>

      <div className="flex gap-6 mt-3">
        <CardClass
          name={"Mapa de Conhecimento configurável"}
          description={
            "O professor decide se o Mapa de Conhecimento será obrigatório ou recomendado."
          }
        />
        <CardClass
          name={"Bloqueio por pré-requisitos"}
          description={
            "Conteúdos só são liberados após o cumprimento das etapas anteriores."
          }
        />
        <CardClass
          name={"Acompanhamento por turma"}
          description={
            "Visualização do progresso geral da sala e do desempenho coletivo."
          }
        />
        <CardClass
          name={"Ritmo de estudo personalizado"}
          description={
            "Permite adaptar o ritmo da turma conforme o nível dos alunos."
          }
        />
      </div>
    </section>
  );
}

export default ProfessoresSalas;
