import React from "react";
import Navbar from "./components/Navbar";
import HorizontalScroll from "./components/Horizontal-slider";

const home = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-gray-300 text-white w-screen h-screen flex flex-col justify-start relative">
          <div className="bg-opacity-50 z-30 pt-50 ml-5">
            <h1 className="text-6xl">
              Our freelancers <br /> will take it from here
            </h1>
            <input
              className="bg-white rounded-md w-8/12 h-11 mt-6 placeholder-gray-400 p-3"
              type="text"
              placeholder="search for any service"
            />
            <div className="flex gap-4 mt-6">
              <button className="bg-transparent border rounded-md p-2 hover:cursor-pointer">
                website design
              </button>
              <button className="bg-transparent border rounded-md p-2 hover:cursor-pointer">
                logo design
              </button>
              <button className="bg-transparent border rounded-md p-2 hover:cursor-pointer">
                video editing
              </button>
              <button className="bg-transparent border rounded-md p-2 hover:cursor-pointer">
                Architecture and Interior design
              </button>
            </div>
          </div>
          <video
            autoPlay
            loop
            muted
            className="absolute z-10 h-screen w-screen object-cover"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </section>
        <section className="bg-white text-black">
          <article className="flex justify-evenly">
            <div className="p-4 w-max text-sm">
              {" "}
              <img
                src="#"
                alt="pic"
                className="shadow p-2 rounded-lg w-24 h-24"
              />
              <p className="pt-3">Programming & Tech</p>
            </div>
            <div className="p-4 w-max text-sm">
              {" "}
              <img
                src="#"
                alt="pic"
                className="shadow p-2 rounded-lg w-24 h-24"
              />
              <p className="pt-3">Graphics & Design</p>
            </div>
            <div className="p-4 w-max text-sm">
              {" "}
              <img
                src="#"
                alt="pic"
                className="shadow p-2 rounded-lg w-24 h-24"
              />
              <p className="pt-3">Digital Marketing</p>
            </div>
            <div className="p-4 w-max text-sm">
              {" "}
              <img
                src="#"
                alt="pic"
                className="shadow p-2 rounded-lg w-24 h-24"
              />
              <p className="pt-3">Writing & Translation</p>
            </div>
            <div className="p-4 w-max text-sm">
              {" "}
              <img
                src="#"
                alt="pic"
                className="shadow p-2 rounded-lg w-24 h-24"
              />
              <p className="pt-3">Video & Animation</p>
            </div>
            <div className="p-4 w-max text-sm">
              {" "}
              <img
                src="#"
                alt="pic"
                className="shadow p-2 rounded-lg w-24 h-24"
              />
              <p className="pt-3">AI Services</p>
            </div>
            <div className="p-4 w-max text-sm">
              {" "}
              <img
                src="#"
                alt="pic"
                className="shadow p-2 rounded-lg w-24 h-24"
              />
              <p className="pt-3">Music & Audio</p>
            </div>
            <div className="p-4 w-max text-sm">
              {" "}
              <img
                src="#"
                alt="pic"
                className="shadow p-2 rounded-lg w-24 h-24"
              />
              <p className="pt-3">Business</p>
            </div>
            <div className="p-4 w-max text-sm">
              {" "}
              <img
                src="#"
                alt="pic"
                className="shadow p-2 rounded-lg w-24 h-24"
              />
              <p className="pt-3">Consulting</p>
            </div>
          </article>
          <article className="mt-20">
            <h1 className="text-5xl text-gray-500 mt-5 ml-6">
              Popular Services
            </h1>
            <HorizontalScroll />
          </article>
          <article className="bg-black text-white rounded-lg m-10 pt-6 pb-0 px-6 flex">
            <div className="mt-3 w-6/12 space-y-8">
              <h6>SkwappGo.</h6>
              <h1 className="text-4xl">
                Instant results. <br /> Top talent
              </h1>
              <p>
                Get what you need faster from freelancers who trained their own
                personal AI Creation Models. Now you can browse, prompt, and
                generate instantly. And if you need a tweak or change, the
                freelancer is always there to help you perfect it.
              </p>
              <button className="bg-gray-200 text-black p-1 border-none rounded-md hover:border-white border-2 ">
                Get started
              </button>
            </div>
            <div className="w-6/12 h-auto flex-shrink-0">
              <video autoPlay loop muted>
                <source
                  src="https://fiverr-res.cloudinary.com/video/upload/v1/video-attachments/generic_asset/asset/f4b1924c68e6916c6d100527c7ff3d9c-1743494584325/Image%20model"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default home;
