function Cards({name, description, icon}) {
    return (
        <div className="p-3 bg-white shadow-xl border-l-4 border-[#228B4E] rounded-2xl gap-3  px-5 flex flex-col w-90 md:w-150 xl:w-150 h-auto xl:h-30">
            <div className="flex gap-2">
                {icon}
                <h1 className="font-semibold text-center">{name}</h1>
            </div>
            <div>
                {description}
            </div>
        </div>
    )   
}

export default Cards;