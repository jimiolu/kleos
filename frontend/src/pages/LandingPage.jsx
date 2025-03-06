/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../components/Hero";
import MockPreview from "../components/MockPreview";
import {
  ChevronRight,
  Handshake,
  Lightbulb,
  Linkedin,
  MessageSquareText,
  Podcast,
  Twitter,
} from "lucide-react";
import Testimonial from "../components/Testimonial";

const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      //   once: true
    });
  });

  return (
    <div className="container mx-auto px-4 pb-20">
      <Hero />

      {/* Section 2  */}
      <div className="lg:h-[100vh] py-20 flex items-center justify-center">
        <div
          data-aos="fade-up"
          className="flex flex-col items-center justify-center gap-20"
        >
          <div className="flex flex-col gap-2 items-center text-center">
            <h2 className="text-2xl">Your Chat Your World</h2>
            <span className="text-4xl font-semibold text-primary">
              Be #Endless with Kleos Installed
            </span>
          </div>

          <div className="w-[100%]">
            <MockPreview />
          </div>

          <div className="grid grid-cols-2 gap-5 md:flex md:gap-10">
            <div className="flex items-center gap-2 text-primary">
              <div className="bg-primary text-neutral-200 p-2 rounded-xl">
                <MessageSquareText className="size-6" />
              </div>
              <span className="uppercase">Message</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <div className="bg-primary text-neutral-200 p-2 rounded-xl">
                <Handshake className="size-6" />
              </div>
              <span className="uppercase">collaborate</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <div className="bg-primary text-neutral-200 p-2 rounded-xl">
                <Podcast className="size-6" />
              </div>
              <span className="uppercase">Discuss</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <div className="bg-primary text-neutral-200 p-2 rounded-xl">
                <Lightbulb className="size-6" />
              </div>
              <span className="uppercase">grow</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3  */}
      <div className="flex flex-col gap-20 lg:gap-60 py-10">
        <div
          data-aos="fade-up"
          className="flex flex-col items-center gap-10 lg:gap-20 lg:flex-row"
        >
          <div className="flex-1 flex flex-col lg:text-start gap-5">
            <h2 className="text-4xl font-medium lg:w-[70%]">
              Never miss a Moment with seamless mobile chat
            </h2>
            <span className="w-[80%] lg:w-[70%] text-lg">
              From a individual chats to classmates to a quick chats with mom,
              feel like you're in the same room with voice and video calls.
            </span>
            <Link to="/login">
              <div className="flex items-center">
                <span className="border-b-2 border-primary text-lg">
                  Learn more
                </span>
                <ChevronRight />
              </div>
            </Link>
          </div>
          <div className="flex-1 shadow-xl rounded-2xl w-full overflow-hidden">
            <img
              src="/img2.png"
              alt="img"
              className="w-full lg:h-[30rem] object-cover"
            />
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="flex flex-col items-center gap-10 lg:gap-20 lg:flex-row"
        >
          <div className="flex-1 order-2 lg:order-1 shadow-xl rounded-2xl w-full overflow-hidden">
            <img
              src="/img3.png"
              alt="img"
              className="w-full lg:h-[30rem] object-cover"
            />
          </div>
          <div className="flex-1 order-1 lg:order-2 flex flex-col lg:text-start gap-5">
            <h2 className="text-4xl font-medium lg:w-[70%]">
              Upload and Chat like Never Before
            </h2>
            <span className="w-[80%] lg:w-[70%] text-lg">
              From a individual chats to classmates to a quick chats with mom,
              feel like you're in the same room with voice and video calls.
            </span>
            <Link to="/login">
              <div className="flex items-center">
                <span className="border-b-2 border-primary text-lg">
                  Learn more
                </span>
                <ChevronRight />
              </div>
            </Link>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="flex flex-col items-center gap-10 lg:gap-20 lg:flex-row"
        >
          <div className="flex-1 flex flex-col lg:text-start gap-5">
            <h2 className="text-4xl font-medium lg:w-[70%]">
              Rule Your World With KleosApp
            </h2>
            <span className="w-[80%] lg:w-[70%] text-lg">
              From a individual chats to classmates to a quick chats with mom,
              feel like you're in the same room with voice and video calls.
            </span>
            <Link to="/signup">
              <div className="flex items-center">
                <span className="border-b-2 border-primary text-lg">
                  Get Started
                </span>
                <ChevronRight />
              </div>
            </Link>
          </div>
          <div className="flex-1 shadow-xl rounded-2xl w-full overflow-hidden">
            <img
              src="/img4.png"
              alt="img"
              className="w-full lg:h-[30rem] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Section 4  */}
      <div>
        <Testimonial />
      </div>

      {/* Footer  */}
      <div className="bg-[#252525] py-20 px-10 rounded-3xl">
        <div
          data-aos="fade-up"
          className="flex flex-col gap-4 items-center justify-center"
        >
          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col text-neutral-100 gap-0 items-center">
              <span className="text-2xl">CONVINCED?</span>
              <span className="text-xl text-neutral-100/60 text-center">
                Explore the new social way with KLeosApp
              </span>
            </div>
            <Link to="/signup">
              <button className="btn btn-primary px-10 text-lg">
                Sign Up Now
              </button>
            </Link>
          </div>
          <hr className="border border-neutral-600 w-[90%] mt-6" />
          <div className="text-neutral-400">
            <span className="text-lg">
              Copyright &copy; 2025 -
              <Link to="https://marckuti.com"> Marc Kuti</Link>
            </span>
          </div>
          <div className="flex gap-5 items-center">
            <Link to="https://linkedin.com/in/marckuti">
              <Linkedin className="text-neutral-400 size-8" />
            </Link>
            <Link to="https://x.com/marckuti">
              <Twitter className="text-neutral-400 size-8" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
