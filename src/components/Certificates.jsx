import React from 'react'
import ProjectCard from './CertificateCard.jsx'
import {FadeIn, StaggerContainer} from '../utils/ScrollAnimations'


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
    <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white px-6 py-16">
      <FadeIn>
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-2 text-center">Certificates</h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto mb-16"></div>
        </div>
      </FadeIn>
      {/* Responsive Grid */}
      <StaggerContainer staggerDelay={200} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </StaggerContainer>
    </section>
  );
}