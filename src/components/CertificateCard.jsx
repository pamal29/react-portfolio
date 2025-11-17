import React from "react";

export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className="bg-white dark:bg-black border-2 border-black dark:border-white rounded-xl overflow-hidden flex flex-col h-full m-4">
      <div className="w-full h-40 sm:h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{title}</h3>
        <p className="text-black-500 mb-4 flex-grow sm:text-base">{description}</p>

        {link && (
          <div className="relative group mt-auto">
            <div className="absolute -inset-0.5 "></div>
            <button
              onClick={() => window.open(link, "_blank")}
              className="relative px-8 py-3 bg-white text-black rounded-full border-2 border-black w-full hover:bg-black hover:text-white transition-all duration-300
                          dark:bg-black dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
            >
              Verify
            </button>
          </div>
        )}
      </div>
      
    </div>
  );
}