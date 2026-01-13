function CardClass({ name, description }) {
  return (
    <div className="flex flex-col h-auto p-5 xl:h-65 bg-white xl:p-3 gap-5 rounded-2xl border-b-8 border-[#228B4E] w-80 md:w-150 xl:w-60 ">
      <h1 className="font-semibold text-lg text-center">{name}</h1>
      <p className="text-justify">{description}</p>
    </div>
  );
}

export default CardClass;
