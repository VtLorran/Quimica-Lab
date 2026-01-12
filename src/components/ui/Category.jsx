function Category({name, description}) {
   return  (
    <div className="flex flex-col bg-white rounded-2xl gap-5 border-b-7  border-[#228B4E] py-8 p-4 shadow-2xl w-75 h-100">
        <h1 className="font-semibold text-2xl text-center ">{name}</h1>
        <p className="text-justify ">{description}</p>
    </div>
   )
}

export default Category;