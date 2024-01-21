import React from "react";

const About: React.FC = () => {
  return (
    <div id="about" className="about mt-[100px] mb-[156px]">
      <div className="about-wrapper my-[20px] px-4">
        <h2 className="title mb-[36px] text-[20px] font-semibold">About me</h2>
        <div className="about-block mb-[80px] flex justify-between items-center flex-wrap sm:gap-[50px]">
          <div
            className="about-block_left bg-main bg-left-bottom w-[290px] h-[290px] rounded-full
             flex items-center justify-center"
          >
            <div
              className="block_left-circle rounded-full bg-light-gray-color 
              w-[256px] h-[256px] overflow-hidden flex justify-center"
            >
              <img
                className="h-[110%] w-[100%]"
                src="./assets/middle-person.png"
                alt="middle-person"
              />
            </div>
          </div>

          <div className="about-block_text w-[100%]">
            <div className="left-bottom_hr h-[4px] w-[25px] mb-[20px] bg-purple-color"></div>
            <div className="about-block_right w-[100%] text-gray-color font-normal text-[20px] mb-[40px] leading-7">
              <span className="font-semibold text-black-color">
                Nick Richardson
              </span>{" "}
              - specialist in Frontend development. Clear code is my passion.
              Solving issues through negotiations
            </div>
            <button
              className="left-bottom_bt text-white text-[16px] font-semibold
              w-[190px] h-[50px] rounded-full justify-center items-center gap-[12px]
              bg-purple-color hover:bg-purple-color-hover transition ease-in-out
              active:border-btn-pressed active:border-[3px] hidden md:flex"
            >
              Get in touch
              <img src="./assets/btn-arrow.png" alt="arrow icon" />
            </button>
          </div>
        </div>
        <div className="about-info flex justify-between flex-wrap gap-[44px]">
          <div className="interest-block flex flex-col gap-[48px] w-[350px]">
            <h2 className="title h-[36px] font-bold text-[20px] md:text-[24px] lg:[32px]">
              Interest
            </h2>
            <div className="about-info_wrapper flex flex-col gap-[44px]">
              {/* first block */}
              <div className="interest-block_item flex items-center gap-[16px]">
                <div className="item-img w-[60px] h-[60px] flex items-center justify-center rounded-full border-2 border-purple-color">
                  <img src="./assets/music.svg" alt="music icon" />
                </div>
                <div className="item-text text-[20px] font-normal flex flex-col gap-[8px]">
                  <span className="font-semibold">Music</span>
                  <p>Indie rock | Reggae</p>
                </div>
              </div>
              {/* second block */}
              <div className="interest-block_item flex items-center gap-[16px]">
                <div className="item-img w-[60px] h-[60px] flex items-center justify-center rounded-full border-2 border-purple-color">
                  <img src="./assets/drawing.svg" alt="music icon" />
                </div>
                <div className="item-text text-[20px] font-normal flex flex-col gap-[8px]">
                  <span className="font-semibold">Art</span>
                  <p>Edvard Munch | Frida Kahlo</p>
                </div>
              </div>
              {/* third block */}
              <div className="interest-block_item flex items-center gap-[16px]">
                <div className="item-img w-[60px] h-[60px] flex items-center justify-center rounded-full border-2 border-purple-color">
                  <img src="./assets/Photo.svg" alt="music icon" />
                </div>
                <div className="item-text text-[20px] font-normal flex flex-col gap-[8px]">
                  <span className="font-semibold">Photography</span>
                  <p>Portraits</p>
                </div>
              </div>
            </div>
          </div>
          <div className="eductaion w-[100%]">
            <h2 className="title h-[36px] w-[300px] mb-[28px] font-bold text-[20px] md:text-[24px] lg:[32px] md:mb-[44px]">
              Education & Experience
            </h2>
            <div className="education-wrapper flex flex-col gap-[24px]">
              {/* first block education */}
              <div
                className="education-block_item flex gap-[16px] text-[20px] font-normal 
                h-[100px] w-[100%] border-b-2 border-light-gray-color"
              >
                <div className="eductaion-item_left w-[120px]">
                  2008 - Present
                </div>
                <div className="education-item_right flex flex-col gap-[8px] ">
                  <p className="font-semibold leading-[25px]">
                    Middle Frontend developer{" "}
                  </p>
                  <p>Ozon</p>
                </div>
              </div>
              {/* second block education */}
              <div
                className="education-block_item flex gap-[16px] text-[20px] font-normal 
                h-[100px] w-[100%] border-b-2 border-light-gray-color"
              >
                <div className="eductaion-item_left w-[120px]">2006 - 2007</div>
                <div className="education-item_right flex flex-col gap-[8px]">
                  <p className="font-semibold leading-[25px]">
                    Frontend development courses
                  </p>
                  <p>Stepik</p>
                </div>
              </div>
              {/* third block education */}
              <div
                className="education-block_item flex gap-[16px] text-[20px] font-normal 
                h-[100px] w-[100%] border-b-2 border-light-gray-color"
              >
                <div className="eductaion-item_left w-[120px]">2000 - 2005</div>
                <div className="education-item_right flex flex-col gap-[8px]">
                  <p className="font-semibold leading-[21px]">
                    Frontend developer
                  </p>
                  <p>Saint Petersburg State University</p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="left-bottom_bt text-white text-[16px] font-semibold
              w-[190px] h-[50px] rounded-full justify-center items-center gap-[12px]
              mt-[48px]
              bg-purple-color hover:bg-purple-color-hover transition ease-in-out
              active:border-btn-pressed active:border-[3px] flex md:hidden"
          >
            Get in touch
            <img src="./assets/btn-arrow.png" alt="arrow icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
