import React from "react";

export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className="bg-white border-2 border-black rounded-xl overflow-hidden flex flex-col h-full shadow-sm hover:shadow-xl transition-all duration-300">
      
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
        <h3 className="text-xl sm:text-2xl font-semibold text-black mb-2">
          {title}
        </h3>

        <p className="text-black opacity-70 mb-4 flex-grow text-sm sm:text-base">
          {description}
        </p>

        {link && (
          <button
            onClick={() => window.open(link, "_blank")}
            className="mt-auto px-6 py-3 bg-white text-black rounded-full border-2 border-black w-full hover:bg-black hover:text-white transition-all duration-300 text-sm sm:text-base"
          >
            View Project
          </button>
        )}
      </div>

    </div>
  );
}
