export const CardChat = ({
  title,
  image,
  pre,
  commonButton,
  CardTextCenter,
  bottomText,
  borderHidden,
}) => {
  return (
    <>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src={image} alt="Sunset in the mountains" />
        <div class="px-6 py-4 text-center ">
          <div class={`font-bold ${CardTextCenter}`}>{title}</div>
          <p className={`text-[10px] mb-2 text-[#727681] ${CardTextCenter}`}>
            {pre}
          </p>
          <div className={`${commonButton} flex gap-5`}>
            <button className="text-[#1D73F2] border-0  bg-[#1D73F20F] rounded-full hover:bg-[#1D73F2] hover:text-[#fff] px-4 py-1">
              View details
            </button>
            <button className="text-[#1D73F2] border border-[#1D73F2] py-1 px-4 rounded-full hover:bg-[#1D73F2] hover:text-[#fff] ">
              I like this
            </button>
          </div>

          <div className={`${borderHidden}`}></div>
          <div className={`text-end`}>{bottomText}</div>
        </div>
      </div>
    </>
  );
};

CardChat.defaultProps = {
  borderHidden: "",
  commonButton: "",
  CardTextCenter: "",
  CardTextEnd: "",
  bottomText: "",
};
