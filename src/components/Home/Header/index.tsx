import React from "react";

const Header = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const showMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div
      className="header h-[64px] p-[15px] flex justify-center items-center bg-white-color
    border-2 border-b-light-gray-color sticky top-0 z-10"
    >
      <div className="container mx-auto md:mx-auto">
        <div className="header-wrapper flex justify-between items-center">
          <div className="left">
            <img
              className="cursor-pointer"
              src="./assets/logo.png"
              alt="logo"
            />
          </div>
          <div className="right">
            <ul
              className="nav-menu justify-between items-center gap-[24px] text-[16px] font-[600] 
              invisible hidden md:flex md:visible"
            >
              <li className="nav-menu_item">
                <a href="#top" className="text-[16px]">
                  Main
                </a>
              </li>
              <li className="nav-menu_item">
                <a href="#about">About</a>
              </li>
              <li className="nav-menu_item">
                <a href="#feedback">Get in touch</a>
              </li>
            </ul>

            <div
              onClick={() => showMobileMenu()}
              className="righ-mobile_menu md:hidden md:invisible relative"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.800049 2.50002C0.800049 2.07568 0.96862 1.66871 1.26868 1.36865C1.56874 1.0686 1.9757 0.900024 2.40005 0.900024H21.6C22.0244 0.900024 22.4314 1.0686 22.7314 1.36865C23.0315 1.66871 23.2001 2.07568 23.2001 2.50002C23.2001 2.92437 23.0315 3.33134 22.7314 3.6314C22.4314 3.93145 22.0244 4.10002 21.6 4.10002H2.40005C1.9757 4.10002 1.56874 3.93145 1.26868 3.6314C0.96862 3.33134 0.800049 2.92437 0.800049 2.50002ZM0.800049 10.5C0.800049 10.0757 0.96862 9.66871 1.26868 9.36865C1.56874 9.0686 1.9757 8.90002 2.40005 8.90002H21.6C22.0244 8.90002 22.4314 9.0686 22.7314 9.36865C23.0315 9.66871 23.2001 10.0757 23.2001 10.5C23.2001 10.9244 23.0315 11.3313 22.7314 11.6314C22.4314 11.9315 22.0244 12.1 21.6 12.1H2.40005C1.9757 12.1 1.56874 11.9315 1.26868 11.6314C0.96862 11.3313 0.800049 10.9244 0.800049 10.5ZM0.800049 18.5C0.800049 18.0757 0.96862 17.6687 1.26868 17.3687C1.56874 17.0686 1.9757 16.9 2.40005 16.9H21.6C22.0244 16.9 22.4314 17.0686 22.7314 17.3687C23.0315 17.6687 23.2001 18.0757 23.2001 18.5C23.2001 18.9244 23.0315 19.3313 22.7314 19.6314C22.4314 19.9315 22.0244 20.1 21.6 20.1H2.40005C1.9757 20.1 1.56874 19.9315 1.26868 19.6314C0.96862 19.3313 0.800049 18.9244 0.800049 18.5Z"
                  fill="#27272A"
                />
              </svg>

              {mobileMenu && (
                <div
                  className="mobile-menu_block absolute right-[0px] top-[50px] rounded-[16px]
                 py-[10px] px-[20px] bg-white w-[200px] h-[150px] shadow-xl "
                >
                  <ul className="flex flex-col gap-[10px] justify-center items-center h-[100%]">
                    <li>
                      <a href="#top" className="font-bold">
                        Main
                      </a>
                    </li>
                    <li>
                      <a href="#about" className="font-bold">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#feedback" className="font-bold">
                        Feedback
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
