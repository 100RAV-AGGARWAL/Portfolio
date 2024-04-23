import React from "react";
import { experiences } from "@/data/content/experiences";

function Experiences() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-start">
      {experiences.map((item, index) => {
        return (
          <div
            className="w-full"
            key={index}
          >
            <a href={item.link} target="_blank" className="w-full">
              <img
                className="w-full h-96 hover:opacity-75 transition-opacity object-cover"
                src={item.img}
              />
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Experiences;
