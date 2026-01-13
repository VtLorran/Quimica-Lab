import Category from "../ui/Category";

function AlunosTrilha() {
  return (
    <section className=" h-auto p-10 w-100 md:w-200 xl:w-[80vw] mt-5 rounded-2xl items-center flex flex-col gap-3 bg-[#eee7dc9e] ">
      <h1 className="font-bold text-2xl">Trilha de Estudos</h1>
      <div className="flex flex-col xl:flex-row gap-5 mt-5">
        <Category
          name={"Química Geral"}
          description={
            "É a base de toda a Química. Aqui o aluno aprende os conceitos fundamentais, como matéria, substâncias, misturas, estrutura atômica, tabela periódica e ligações químicas. Essa etapa é essencial para entender todas as outras áreas da Química."
          }
        />

        <Category
          name={"Química Orgânica"}
          description={
            "Estuda os compostos que têm o carbono como elemento principal. O foco está nas cadeias carbônicas, funções orgânicas, reações e aplicações no dia a dia, como combustíveis, medicamentos e plásticos."
          }
        />

        <Category
          name={"Físico-Química"}
          description={
            "Relaciona conceitos da Física com a Química para explicar como e por que as reações acontecem. Envolve temas como energia, velocidade das reações, equilíbrio químico e eletroquímica."
          }
        />

        <Category
          name={"Química Inorgânica"}
          description={
            "Analisa substâncias que não são orgânicas, como ácidos, bases, sais e óxidos. Estuda propriedades, classificações e reações químicas muito presentes no cotidiano e na indústria."
          }
        />
      </div>
    </section>
  );
}

export default AlunosTrilha;
