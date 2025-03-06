import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="mt-16 h-[70vh] lg:h-[calc(100vh-70px)] flex items-center justify-center">
      <div className="">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div
            data-aos="fade-down-right"
            className="relative lg:flex-1 "
          >
            {/* <div className="absolute lg:relative inset-0 bg-base-100/90 " /> */}
            <div className="flex flex-col items-center z-10 lg:items-start gap-10">
              <h1 className="text-primary font-semibold text-5xl md:text-7xl">Be #Endless</h1>
              <span className="text-primary/55 text-center lg:text-start text-lg w-[90%] md:w-[70%]">
                Enjoy simple, reliable, private messaging and file upload as
                ever with top offers available all over the world all for free.
              </span>
              <div className="flex flex-col md:flex-row gap-5">
                <Link to="/signup">
                  <button className="btn btn-primary w-full px-20 h-16 text-[15px]">
                    Sign up
                  </button>
                </Link>
                <Link to="/login">
                  <button className="btn bg-transparent border-2 border-primary hover:bg-transparent w-full px-20 h-16 text-[15px]">
                    Sign in
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Banner picture  */}
          <div
            data-aos="fade-down-left"
            className="hidden relative lg:block lg:flex-1"
          >
            <img src="/img.png" alt="Banner" className="w-[35rem]" />
            <div>
              <div className="flex gap-2 items-center bg-[#fbfbfe] shadow-md absolute top-80 right-28 p-5 rounded-xl">
                <img src="/icon2.png" alt="icon" />
                <span className="text-xl text-primary">Chat Endlessly</span>
              </div>
              <div className="flex gap-2 items-center bg-[#fbfbfe] shadow-md absolute top-[24rem] p-5 rounded-xl">
                <img src="/icon3.png" alt="icon" />
                <span className="text-xl text-primary">Spread Love</span>
              </div>
              <div className="flex gap-2 items-center bg-[#fbfbfe] shadow-md absolute top-[35rem] right-28 p-5 rounded-xl">
                <img src="/icon4.png" alt="icon" />
                <span className="text-xl text-primary">Grow Unstoppable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
