import React from "react";

export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className="bg-white border-2 border-black rounded-xl overflow-hidden flex flex-col h-full">
      <div className="w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-black mb-2">{title}</h3>
        <p className="text-black-500 mb-4 flex-grow">{description}</p>

        {link && (
          <div className="relative group mt-auto">
            <div className="absolute -inset-0.5 "></div>
            <button
              onClick={() => window.open(link, "_blank")}
              className="relative px-8 py-3 bg-white text-black rounded-full border-2 border-black w-full hover:bg-black hover:text-white transition-all duration-300"
            >
              View Project
            </button>
          </div>
        )}
      </div>
      
    </div>
  );
}