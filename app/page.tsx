import React from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import HorizontalScroll from "./components/Horizontal-slider";
import Footer from "./components/Footer";

const home = () => {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="bg-green-300 text-white w-screen  h-screen flex flex-col justify-start relative">
          <div className="bg-opacity-50 z-30 mt-60 ml-5">
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
            className="hidden md:block md:absolute md:z-10 md:h-screen md:w-screen object-cover"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </section>
        <section className="bg-white text-black">
          <article className="grid grid-cols-3 mt-4 md:flex md:justify-evenly md:grid-cols-none">
            <div className="p-4 text-sm shadow rounded-lg w-28 h-28">
              {" "}
              <img src="/images/tech.svg" alt="pic" />
              <p className="pt-3">Programming & Tech</p>
            </div>
            <div className="p-4 text-sm shadow rounded-lg w-28 h-28">
              {" "}
              <img src="/images/graphics.svg" alt="pic" />
              <p className="pt-3">Graphics & Design</p>
            </div>
            <div className="p-4 text-sm shadow rounded-lg w-28 h-28">
              {" "}
              <img src="/images/digital.svg" alt="pic" />
              <p className="pt-3">Digital Marketing</p>
            </div>
            <div className="p-4 text-sm shadow rounded-lg w-28 h-28">
              {" "}
              <img src="/images/writing.svg" alt="pic" />
              <p className="pt-3">Writing & Translation</p>
            </div>
            <div className="p-4 text-sm shadow rounded-lg w-28 h-28">
              {" "}
              <img src="/images/video.svg" alt="pic" />
              <p className="pt-3">Video & Animation</p>
            </div>
            <div className="p-4 text-sm shadow rounded-lg w-28 h-28">
              {" "}
              <img src="/images/ai.svg" alt="pic" />
              <p className="pt-3">AI Services</p>
            </div>
            <div className="p-4 text-sm shadow rounded-lg w-28 h-28">
              {" "}
              <img src="/images/music.svg" alt="pic" />
              <p className="pt-3">Music & Audio</p>
            </div>
            <div className="p-4 text-sm shadow rounded-lg w-28 h-28">
              {" "}
              <img src="/images/business.svg" alt="pic" />
              <p className="pt-3">Business</p>
            </div>
            <div className="p-4 text-sm shadow rounded-lg w-28 h-28">
              {" "}
              <img src="/images/consulting.svg" alt="pic" />
              <p className="pt-3">Consulting</p>
            </div>
          </article>
          <article className="mt-20">
            <h1 className="text-5xl text-gray-500 mt-5 ml-6">
              Popular Services
            </h1>
            <HorizontalScroll />
          </article>
          <article className="flex flex-col-reverse md:flex-row bg-black text-white rounded-lg m-10 pt-6 pb-0 px-6">
            <div className="mt-3 w-full md:w-1/2 space-y-8">
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
              <button className="bg-gray-200 text-black mb-4 p-2 border-none rounded-md hover:border-white border-2 hover:cursor-pointer">
                Get started
              </button>
            </div>
            <div className="w-full md:w-1/2 h-auto flex-shrink-0">
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
        <article className="bg-gray-200 text-black rounded-lg m-10 pt-6 pb-0 px-6 flex">
          <div className="space-y-8 mx-6 mt-3 w-full">
            <h6>skwapp-pro</h6>
            <h1 className="text-4xl">
              The premium <span className="text-green-300">freelance</span>{" "}
              solution for businesses
            </h1>
            <ul className="space-y-8 block md:grid md:grid-cols-2 md:gap-4">
              <li>
                <strong>Dedicated hiring experts</strong>
                <br /> Count on an account manager to find you the right talent
                and see to your project’s every need.
              </li>
              <li>
                <strong>Satisfaction guarantee</strong> <br /> Order
                confidently, with guaranteed refunds for less-than-satisfactory
                deliveries.
              </li>
              <li>
                <strong>Advanced management tools</strong> <br /> Seamlessly
                integrate freelancers into your team and projects.
              </li>
              <li>
                <strong>Flexible payment models</strong> <br /> Pay per project
                or opt for hourly rates to facilitate longer-term collaboration
              </li>
            </ul>
            <button className="bg-gray-400 text-black mb-4 p-3 border-none rounded-md hover:border-white border-2 hover:cursor-pointer">
              Try Now
            </button>
          </div>
          <div className="hidden md:flex my-6 mt-3 w-full">
            <img
              src="/images/fiverr-pro.webp"
              alt="people"
              className="object-contain"
            />
          </div>
        </article>
        <article className="text-gray-600">
          <div className="mx-8 space-y-4">
            <h1 className="text-4xl">What success on Skwapp looks like</h1>
            <p>
              Vontélle Eyewear turns to Skwapp freelancers to bring their vision
              to life.
            </p>
          </div>
          <div className="m-10 pt-6">
            <video
              autoPlay
              loop
              muted
              className="h-80 w-full object-cover rounded-xl border-2 border-blue-600"
            >
              <source
                src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-attachments/generic_asset/asset/03e1ef43201724755eceea67985317b2-1722432611137/Vontelle%20Breakthrough%209x16"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </article>
        <article className="text-gray-600">
          <h1 className="mx-8 text-4xl">Vontélle’s trusted services</h1>
          <HorizontalScroll />
        </article>
        <article className="text-gray-600 mt-10 mx-10 my-10 p-8 space-y-12">
          <h1 className="text-4xl">Make it all happen with freelancers</h1>
          <ul className="block md:flex md:justify-between">
            <li className="w-50">
              <img src="/images/pool.svg" alt="squares" className="pb-2" />
              Access a pool of top talent across 700 categories
            </li>
            <li className="w-50">
              <img src="/images/easy.svg" alt="squares" className="pb-2" />
              Enjoy a simple, easy-to-use matching experience
            </li>
            <li className="w-50">
              <img src="/images/quick.svg" alt="squares" className="pb-2" />
              Get quality work done quickly and within budget
            </li>
            <li className="w-50">
              <img src="/images/pay.svg" alt="squares" className="pb-2" />
              Only pay when you’re happy
            </li>
          </ul>
          <button className="bg-gray-400 text-black block mx-auto mb-4 p-3 border-none rounded-md hover:border-white border-2 hover:cursor-pointer">
            Join Now
          </button>
        </article>

        <article className="m-10 pt-6 pb-0 px-6">
          <h1 className="text-4xl text-black">Made on Skwapp</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-fr">
            <img
              src="/images/product.jpg"
              alt="tests"
              className="rounded-lg w-80 h-auto"
            />
            <img
              src="/images/product.jpg"
              alt="tests"
              className="row-span-2 rounded-lg w-80 h-full object-cover"
            />
            <img
              src="/images/product.jpg"
              alt="tests"
              className="rounded-lg w-80 h-auto"
            />
            <img
              src="/images/product.jpg"
              alt="tests"
              className="rounded-lg w-80 h-auto"
            />
            <img
              src="/images/product.jpg"
              alt="tests"
              className="row-span-3 rounded-lg w-80 h-full object-cover"
            />
            <img
              src="/images/product.jpg"
              alt="tests"
              className="rounded-lg w-80 h-auto"
            />
            <img
              src="/images/product.jpg"
              alt="tests"
              className="row-span-3 rounded-lg w-80 h-full object-cover"
            />
            <img
              src="/images/product.jpg"
              alt="tests"
              className="rounded-lg w-80 h-auto"
            />
            <img
              src="/images/product.jpg"
              alt="tests"
              className="rounded-lg w-80 h-auto"
            />
            <img
              src="/images/product.jpg"
              alt="tests"
              className="row-span-3 rounded-lg w-80 h-full object-cover"
            />
            <img
              src="/images/product.jpg"
              alt="tests"
              className="rounded-lg w-80 h-auto"
            />
            <img
              src="/images/product.jpg"
              alt="tests"
              className="rounded-lg w-80 h-auto"
            />
            <img
              src="/images/product.jpg"
              alt="tests"
              className="rounded-lg w-80 h-auto"
            />
            <img
              src="/images/product.jpg"
              alt="tests"
              className="rounded-lg w-80 h-auto"
            />
            <img
              src="/images/product.jpg"
              alt="tests"
              className="row-span-2 rounded-lg w-80 h-full object-cover"
            />
          </div>
        </article>

        <article className="bg-purple-600 flex flex-col justify-center items-center rounded-lg m-10 h-min-50 p-8">
          <h1 className="text-6xl">
            Freelance services at your{" "}
            <span className="text-orange-500">fingertips</span>
          </h1>
          <button className="bg-gray-400 text-black block m-auto w-max p-3 border-none rounded-md hover:border-white border-2 hover:cursor-pointer">
            Join Skwapp
          </button>
        </article>
        <article className="bg-white text-gray-400 justify-evenly flex gap-4">
          <ul className="space-y-4">
            <p className=" text-gray-800 font-bold">Categories</p>
            <li>
              <Link href="/" className="hover:underline">
                Graphics & Design
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                AI Services
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Music & Audio
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Conslting
              </Link>
            </li>
          </ul>
          <ul className="space-y-4">
            <p className=" text-gray-800 font-bold">For Clients</p>
            <li>
              <Link href="/" className="hover:underline">
                How Skwapp Works
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Customer Success Stories
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Trust & Safety
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Quality Guide
              </Link>
            </li>
          </ul>
          <ul className="space-y-4">
            <p className=" text-gray-800 font-bold">For Freelancers</p>
            <li>
              <Link href="/" className="hover:underline">
                Become a Fiverr Freelancer
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Become an Agency
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                AI Services
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Music & Audio
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Conslting
              </Link>
            </li>
          </ul>
          <ul className="space-y-4">
            <p className=" text-gray-800 font-bold">categories</p>
            <li>
              <Link href="/" className="hover:underline">
                Graphics & Design
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                AI Services
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Music & Audio
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Conslting
              </Link>
            </li>
          </ul>
          <ul className="space-y-4">
            <p className=" text-gray-800 font-bold">categories</p>
            <li>
              <Link href="/" className="hover:underline">
                Graphics & Design
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                AI Services
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Music & Audio
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Conslting
              </Link>
            </li>
          </ul>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default home;
