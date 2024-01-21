import React from "react";

const ScrollToTop: React.FC = ({}) => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={() => goToTop()}
      className="top-btn h-[55px] w-[55px] fixed bottom-[40px] right-[25px] rounded-full bg-purple-color
     flex items-center justify-center cursor-pointer z-[9] transition ease-in-out active:border-btn-pressed active:border-[3px] hover:bg-purple-color-hover"
    >
      <div className="top-btn_img">
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 15L12 10L7 15"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default ScrollToTop;
