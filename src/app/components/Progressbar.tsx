interface IProgressbar {
  percentage: number;
}

const Progressbar = ({ percentage }: IProgressbar) => {
  return (
    <div className="h-2.5 w-[200px] rounded-full bg-gray-200 mt-8">
      <div className={`bg-orange-500 w-[${percentage}%] rounded-full h-full`} />
    </div>
  );
};

export default Progressbar;
