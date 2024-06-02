const ExperienceCard = ({ Experience }) => {
  const { Name, Location, Start, End, Keywords, Company, Descriptions } =
    Experience;
  return (
    <div
      className="h-[300px] min-w-[300px] w-[200px] m-2 border-2 bg-slate-500 p-1  rounded-md flex flex-col justify-center items-center transition duration-500 hover:scale-110 z-20 cursor-pointer text-white"
      key={Name}
    >
      <h2 className="text-2xl text-center font-bold">{Name}</h2>
      <h3 className="text-center">{Company}</h3>
      <p>{Location}</p>
      <p>
        {End} ~ {Start}
      </p>
    </div>
  );
};

export default ExperienceCard;
