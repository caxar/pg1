import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="footer h-[80px] flex items-center">
      <div className="container mx-auto md:mx-auto ">
        <div className="footer-wrapper my-[20px] px-4">
          <p className="text-[16px] font-normal text-gray-color">
            © 2022 JetRuby. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
