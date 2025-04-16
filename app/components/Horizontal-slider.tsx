"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { jobs } from "../data/Jobs";

export default function HorizontalScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full px-4">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
      >
        <ChevronLeft />
      </button>

      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scroll-smooth no-scrollbar py-4"
      >
        {jobs.map((job, index) => (
          <div
            key={index}
            className="w-[200px] h-[160px] bg-white rounded-xl shadow-md p-4 flex flex-col justify-between shrink-0 border border-gray-200"
          >
            <div>
              <h2 className="font-bold text-lg">{job.title}</h2>
            </div>
            <img
              src={job.image}
              alt=""
              className="w-[80px] h-[70px] rounded-xl"
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
