import NavButton from "./ui/NavButon";

function Nav() {
    return (
        <section className="bg-white shadow-xl w-full h-15 fixed flex justify-center items-center gap-5 text-sm">
            <NavButton name={"Início"} link={"#inicio"}  />
            <NavButton name={"Problema"} link={"#problemas"}  />
            <NavButton name={"Para Alunos"} link={"#alunos"}  />
            <NavButton name={"Para Professores"} link={"#professores"}  />
        </section>
    )
}

export default Nav;