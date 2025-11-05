import React from "react";

export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className="bg-black border border-white rounded-xl overflow-hidden flex flex-col h-full">
      <div className="w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 flex-grow">{description}</p>

        {link && (
          <div className="relative group mt-auto">
            <div className="absolute -inset-0.5 "></div>
            <button
              onClick={() => window.open(link, "_blank")}
              className="relative px-8 py-3 bg-black text-white rounded-full border border-white w-full "
            >
              View Project
            </button>
          </div>
        )}
      </div>
      
    </div>
  );
}