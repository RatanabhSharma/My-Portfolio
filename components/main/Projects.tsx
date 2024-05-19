import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        <a href="https://www.github.com/ratanabhsharma">My Projects</a>
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/spotify.jpg"
          title="Spotify-Clone"
          description="Developed a Spotify clone with Next.js 13.4 App Router and React. Used Tailwind CSS for styling.Integrated Supabase and PostgreSQL for data management. Implemented Stripe for secure payment processing."
        />
        <ProjectCard
          src="/ai-assistant.png"
          title="Ai-Assistant"
          description="Designed a smart device with microcontroller and Python. Incorporated NLP and ML for personalized voice assistance. Connected to cloud for data and sensors. User-friendly interface ensured ease of use.
          "
        />
        <ProjectCard
          src="/Iot smart Soil Plant Monitoring.png"
          title="Iot smart Soil Plant Monitoring"
          description="Created a smart houseplant care system using IoT. Analyzed environmental data for efficient watering. Sent alerts to Android phones. Sensors tracked weather and soil moisture levels."
        />
      </div>
    </div>
  );
};

export default Projects;
