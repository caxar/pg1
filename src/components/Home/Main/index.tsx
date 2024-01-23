import React from "react";

const Main = () => {
  return (
    <div
      id="#top"
      className="header-content overflow-hidden mt-[30px] h-[100vh] relative"
    >
      <div className="container mx-auto md:mx-auto ">
        <div className="content-wrapper flex justify-between items-center flex-wrap md:flex-nowrap">
          <div className="left flex flex-col my-[20px] px-4">
            <div className="left-top mb-[38px]">
              <div
                className="left-top_title font-bold text-[30px] mb-[10px]
                sm:text-[40px] lg:text-[60px] md:mb-[20px]"
              >
                Hey, I’m Nick
              </div>
              <div className="left-top_subtitle text-gray-color text-[16px] font-normal md:text-[20px]">
                Frontend developer
              </div>
            </div>
            <div className="left-bottom">
              <div className="left-bottom_hr h-[4px] w-[25px] mb-[24px] bg-purple-color"></div>
              <div
                className="left-bottom_text w-[100%] font-normal text-gray-color text-[16px] mb-[27px] 
              leading-7 sm:text-[18px] md:text-[20px] sm:mb-[44px]"
              >
                Help you to create high-quality digital products that your
                clients will love and let your business thrive
              </div>
              <button
                className="left-bottom_btn text-white text-[16px] font-semibold py-[9px] 
              w-[190px] h-[55px] rounded-full flex justify-center items-center gap-[12px]
              bg-purple-color hover:bg-purple-color-hover transition ease-in-out
              active:border-btn-pressed active:border-[3px] lg:bg-hero"
              >
                Get in touch
                <img src="./assets/btn-arrow.png" alt="arrow icon" />
              </button>
            </div>
          </div>
          <div className="right">
            <div
              className="bg-gradient bg-hero-mob 
              bg-no-repeat bg-[30px]"
            >
              <div className="gradient-img  right-0">
                <img src="./assets/top-person.png" className="" alt="person" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
