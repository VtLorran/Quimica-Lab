function NavButton({name, link}) {
    return(
        <a href={link}>
            <button className="cursor-pointer font-semibold">
                {name}
            </button>
        </a>
    )
}

export default NavButton;