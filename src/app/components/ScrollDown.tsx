interface IScrollDown {
  onClick: () => void;
}

const ScrollDown = ({ onClick }: IScrollDown) => {
  return (
    <div className="cursor-pointer w-8 lg:w-7" onClick={onClick}>
      <div className="h-16 lg:h-14 w-full border-2 border-branch rounded-t-full rounded-b-full flex justify-center relative">
        <div className="h-3 w-3 lg:h-2 lg:w-2 bg-branch rounded-full absolute top-1 animate-fadeDown" />
      </div>
    </div>
  );
};

export default ScrollDown;
