import React from 'react'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const projectData = [
    {
      id: 1,
      title: "Movie Recommendation Website",
      description: "A Movie Recommendation site build with Python",
      image: '/movie recommendation.png',
      link: "https://github.com/pamal29/Movie-Recommendations",
    },
    {
      id: 2,
      title: "Movie Streaming Website",
      description: "A responsive movie streaming website built with HTML & CSS.",
      image: '/movie-stream.jpeg',
      link: "https://github.com/pamal29/Movie-Stream-Website",
    },
    {
      id: 3,
      title: "Snake Game",
      description: "Classic Snake Game build using Java",
      image: '/snake-game.png',
      link: "https://github.com/pamal29/snakeGame",
    },
  ];

  return (
    <section className="min-h-screen bg-white text-black px-6 py-16">
      <div className="max-w-6xl mx-auto text-center mb-4">
        <h2 className="text-4xl font-bold mb-4 text-center">Projects</h2>
        <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
        <p className="text-2xl text-black mt-2">
          Here are some of the projects I’ve worked on recently.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}