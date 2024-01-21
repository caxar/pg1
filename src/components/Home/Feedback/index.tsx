import React from "react";

const Feedback: React.FC = () => {
  return (
    <div
      id="feedback"
      className="form h-[760px] bg-main bg-no-repeat bg-[35%] flex items-center py-[64px]"
    >
      <div className="container mx-auto md:mx-auto">
        <div className="form-wrapper flex items-center justify-center w-[100%]">
          <div
            className="form-content w-[95%] h-[100%] bg-white rounded-[16px] py-[48px] px-[16px] 
            text-[32px] font-bold sm:px-[32px] sm:w-[100%] md:px-[32px]"
          >
            <h2 className="form-title mb-[36px] text-[20px] font-semibold sm:text-[32px] sm:font-bold sm:mb-[48px]">
              Let’s discuss your project
            </h2>
            <form action="" className="form flex flex-col">
              <div className="form-content flex flex-col gap-[24px]">
                <div className="content-top flex justify-between gap-[24px] flex-col sm:flex-row">
                  <div className="content-top_item relative flex flex-col w-[100%]">
                    <label
                      htmlFor=""
                      className="mb-[8px] text-[16px] font-semibold"
                    >
                      Your full name <span className="text-red-color">*</span>
                    </label>
                    <div className="focus-within:text-purple-color">
                      {/* absolute bottom-[45px] left-[20px] */}
                      <div className="icon absolute bottom-[20px] left-[20px]">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.75 6C15.75 6.99456 15.3549 7.94839 14.6516 8.65165C13.9484 9.35491 12.9945 9.75 12 9.75C11.0054 9.75 10.0516 9.35491 9.34833 8.65165C8.64506 7.94839 8.24998 6.99456 8.24998 6C8.24998 5.00544 8.64506 4.05161 9.34833 3.34835C10.0516 2.64509 11.0054 2.25 12 2.25C12.9945 2.25 13.9484 2.64509 14.6516 3.34835C15.3549 4.05161 15.75 5.00544 15.75 6ZM4.50098 20.118C4.53311 18.1504 5.33731 16.2742 6.74015 14.894C8.14299 13.5139 10.0321 12.7405 12 12.7405C13.9679 12.7405 15.857 13.5139 17.2598 14.894C18.6626 16.2742 19.4668 18.1504 19.499 20.118C17.1464 21.1968 14.5881 21.7535 12 21.75C9.32398 21.75 6.78398 21.166 4.50098 20.118Z"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        className="text-[16px] font-normal border-2 w-[100%] pr-[15px] pl-[54px] px-[20px]
                       rounded-[16px]
                       text-gray-color
                       border-light-gray-color h-[55px] p-[13px, 20px]
                       hover:border-purple-color transition ease-in-out focus:border-purple-color"
                        placeholder="Name Surname"
                      />
                    </div>
                  </div>
                  {/* second bloc input */}
                  <div className="content-top_item relative flex flex-col w-[100%]">
                    <label
                      htmlFor=""
                      className="mb-[8px] text-[16px] font-semibold"
                    >
                      Your email <span className="text-red-color">*</span>
                    </label>
                    {/* focus-within:text-purple-color */}
                    <div className="focus-within:text-purple-color">
                      <div className="icon absolute bottom-[45px] left-[20px]">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.2 5.2998H19.2001C19.6849 5.29972 20.1515 5.48502 20.5042 5.81777L20.8473 5.45408L20.5042 5.81777C20.7789 6.07694 20.9684 6.41027 21.052 6.77374L12 11.2992L2.94791 6.77374C3.03154 6.41027 3.22098 6.07694 3.49569 5.81777C3.8484 5.48502 4.31498 5.29972 4.79987 5.2998H4.79996H19.2Z"
                            fill="currentColor"
                            stroke="currentColor"
                          />
                          <path
                            d="M21.5999 9.7417L11.9999 14.5417L2.3999 9.7417V16.8001C2.3999 17.4366 2.65276 18.0471 3.10285 18.4972C3.55293 18.9472 4.16338 19.2001 4.7999 19.2001H19.1999C19.8364 19.2001 20.4469 18.9472 20.897 18.4972C21.347 18.0471 21.5999 17.4366 21.5999 16.8001V9.7417Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <input
                        type="email"
                        className="text-[16px] font-normal border-2 w-[100%] pr-[15px] pl-[54px] px-[20px]
                       rounded-[16px]
                       text-gray-color
                       border-light-gray-color h-[55px] p-[13px, 20px]
                       hover:border-purple-color transition ease-in-out focus:border-purple-color1
                       peer"
                        placeholder="name@example.com"
                      />
                      <p className="mt-2 invisible peer-invalid:visible text-red-color text-sm">
                        Please fill this mandatory field
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-bottom">
                  <div className="title text-[16px] font-semibold mb-[8px]">
                    Tell me about your project
                  </div>
                  <textarea
                    className="w-[100%] h-[122px] border-2 border-light-gray-color rounded-[16px] py-[13px] px-[20px] mb-[36px] text-[16px] font-normal
                    hover:border-purple-color transition ease-in-out focus:border-purple-color
                    invalide:text-red-color sm:mb-[48px]"
                    placeholder="Add here a general description of your idea and target aim"
                  ></textarea>
                  <button
                    className="left-bottom_btn text-white text-[16px] font-semibold
              w-[150px] h-[54px] rounded-full flex justify-center items-center gap-[12px]
              bg-purple-color hover:bg-purple-color-hover transition ease-in-out 
              active:border-btn-pressed active:border-[3px]"
                  >
                    Submit
                    <img src="./assets/btn-arrow.png" alt="arrow icon" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
