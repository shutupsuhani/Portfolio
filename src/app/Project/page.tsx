"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';

// Define a type for project data
interface Project {
  id: number;
  name: string;
  description: string;
  homepage?: string;
  html_url: string;
}

const Project = () => {
  const title = "</Projects>";
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/shutupsuhani/repos');
        const data = await response.json();
        const filteredProjects = data.filter((project: any) => (
          project.name === 'QR-code-Generator' ||
          project.name === 'buildwithinnovation_internship_assignment' ||
          project.name === 'Expense-Tracker' ||
          project.name === 'Stone_Paper_Scissors' ||
          project.name === 'To-Do-App' ||
          project.name === 'portfolio'
        ));
        setProjects(filteredProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const redirectToDetailsPage = (url: string) => {
    window.open(url, '_blank');
  };

  const redirectToProjectDescription = (name: string) => {
    // Handle redirection to project description page
    console.log(`Redirect to description for project: ${name}`);
  };

  return (
    <div className="px-4 md:px-0">
      <h1 className="text-xl text-slate-900 mt-6 text-center sm:text-3xl font-mono font-bold">{title}</h1>  
      <div className="grid grid-cols-1 shadow-2xl md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="p-4">
              <h1 className="text-2xl text-left hover:text-blue-400 font-mono font-semibold mb-2">{project.name}</h1>
              <p className="text-gray-700 text-lg font-mono">{project.description}</p>
              {project.homepage && (
                <p className="mt-2">
                  <span className="font-bold font-mono">Hosted Website:</span>{' '}
                  <a href={project.homepage} className="text-blue-600">{project.homepage}</a>
                </p>
              )}

              <div className="flex justify-evenly">
                <button
                  onClick={() => redirectToDetailsPage(project.html_url)}
                  className="h-16 w-32 place-content-center mt-6 hover:mt-2 bg-slate-100 hover:bg-blue-400 rounded-xl text-xl shadow-2xl font-mono flex text-black hover:text-white transition duration-300 ease-in-out"
                >
                  <Image src="/github.png" alt="GitHub Icon" width={20} height={20} className="h-5 rounded-full space-x-4 mt-6 w-5" />
                  <span className="mt-5 space-x-3">Repo</span>
                </button>

                <button
                  onClick={() => redirectToProjectDescription(project.name)}
                  className="h-16 w-32 place-content-center mt-6 hover:mt-2 bg-slate-100 hover:bg-blue-400 rounded-xl text-xl shadow-2xl font-mono flex text-black hover:text-white transition duration-300 ease-in-out"
                >
                  <Image src="/arrow.png" alt="Arrow Icon" width={20} height={20} className="h-5 rounded-full space-x-4 mt-6 w-5" />
                  <span className="mt-5 space-x-3">Details</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <a href="https://github.com/shutupsuhani" target="_blank" rel="noopener noreferrer">
        <button className="h-16 w-36 items-center m-auto hover:mt-16 shadow-2xl bg-slate-50 hover:bg-blue-400 hover:text-white place-content-center rounded-xl mt-20 flex justify-evenly transition duration-300 ease-in-out transform hover:scale-105">
          <span className="text-xl font-mono">View All</span> 
          <Image src="/arrow.png" alt="Arrow Icon" width={32} height={32} className="bg-color-blend-burn h-8 w-8 rounded-full" />
        </button>
      </a>

      <div className="mt-16 border-t border-gray-400"></div>
    </div>
  );
};

export default Project;
