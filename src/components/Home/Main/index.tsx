import React from "react";

const Main = () => {
  return (
    <div id="#top" className="header-content  overflow-hidden mt-[60px]">
      <div className="content-wrapper flex justify-between items-center flex-wrap md:flex-nowrap">
        <div className="left flex flex-col my-[20px] px-4">
          <div className="left-top mb-[60px]">
            <h1
              className="left-top_title font-bold text-[24px] h-[70px] 
                sm:text-[40px] sm:font-extra-bold
              md:text-[60px] md:font-extra-bold"
            >
              Hey, I’m Nick
            </h1>
            <div className="left-top_subtitle text-gray-color text-[14px] font-normal">
              Frontend developer
            </div>
          </div>
          <div className="left-bottom">
            <div className="left-bottom_hr h-[4px] w-[25px] mb-[20px] bg-purple-color"></div>
            <div className="left-bottom_text w-[445px] text-gray-color text-[20px] mb-[40px] leading-7">
              Help you to create high-quality digital products that your clients
              will love and let your business thrive
            </div>
            <button
              className="left-bottom_btn text-white text-[16px] font-semibold
              w-[190px] h-[50px] rounded-full flex justify-center items-center gap-[12px]
              bg-purple-color hover:bg-purple-color-hover transition ease-in-out
              active:border-btn-pressed active:border-[3px]"
            >
              Get in touch
              <img src="./assets/btn-arrow.png" alt="arrow icon" />
            </button>
          </div>
        </div>
        <div
          className="right bg-hero w-[100%] 
          h-[100%] bg-no-repeat bg-right-top flex justify-center"
        >
          <img
            src="./assets/top-person.png"
            className="h-[530px] md:h-[550px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
