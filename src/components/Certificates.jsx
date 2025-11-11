import React from 'react'
import ProjectCard from './CertificateCard.jsx'

export default function Projects() {
  const projectData = [
    {
      id: 1,
      title: "Supervised Machine Learning",
      description: "Certificate for completed the Supervised Machine Learning: Regression and Classification Course by DeepLearning.AI and Stanford Online on Coursera",
      image: '/certificate1.png',
      link: "https://www.coursera.org/account/accomplishments/verify/J7YA4OAMV0BV",
    },
  ];

  return (
    <section className="min-h-screen bg-white text-black px-6 py-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-2 text-center">Certificates</h2>
        <div className="w-24 h-1 bg-black mx-auto mb-16"></div>
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