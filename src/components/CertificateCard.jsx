import React from "react";

export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className="bg-black border border-white rounded-1xl overflow-hidden">
      <div className="w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>

        {link && (
          <button
            onClick={() => window.open(link, "_blank")}
            className="px-8 py-3 text-white rounded-full border border-white w-full"
          >
            Verfy
          </button>
        )}
      </div>
    </div>
  );
}
