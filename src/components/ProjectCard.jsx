import React from "react";

export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className="bg-white dark:bg-black border-2 border-black dark:border-white rounded-xl overflow-hidden flex flex-col h-full shadow-sm hover:shadow-xl transition-all duration-300">
      
      {/* IMAGE */}
      <div className="w-full h-40 sm:h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* TEXT */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-white mb-2">
          {title}
        </h3>

        <p className="text-black dark:text-white opacity-70 mb-4 flex-grow text-sm sm:text-base">
          {description}
        </p>

        {link && (
          <button
            onClick={() => window.open(link, "_blank")}
            className="mt-auto px-6 py-3 bg-white text-black rounded-full border-2 border-black w-full hover:bg-black hover:text-white transition-all duration-300 text-sm sm:text-base
                        dark:bg-black dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
          >
            View Project
          </button>
        )}
      </div>

    </div>
  );
}
