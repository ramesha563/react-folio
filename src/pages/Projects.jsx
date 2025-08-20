
import React, { useState } from 'react';
import './Projects.css';
import { FaEye } from 'react-icons/fa';

const projectData = {
  "Frontend": [
    {
      title: 'Charity',
      category: 'HTML/CSS/JS',
      url: 'https://ramesha56.github.io/Charitty/',
      image: '/projects/charity.png',
    },
    {
      title: 'Loaded Animation',
      category: 'HTML/CSS/JS',
      url: 'https://ramesha56.github.io/animated-homepage/',
      image: '/projects/animation.png',
    },
      {
      title: 'Portfolio',
      category: 'HTML/CSS/JS',
      url: 'https://ramesha563.github.io/pixel-path/index.html',
      image: '/projects/folio.png',
    },
    {
      title: 'Saltn Pepper',
      category: 'HTML/CSS/JS',
      url: 'https://ramesha563.github.io/salt-papper/',
      image: '/projects/pepper.png',
    },
    {
      title: 'Soat',
      category: 'HTML/CSS/',
      url: 'https://ramesha56.github.io/bootstrap/',
      image: '/projects/soat.png',
    },
    {
      title: 'Dental Care',
      category: 'HTML/CSS/JS',
      url: 'https://ramesha56.github.io/dental-care/',
      image: '/projects/dental.png',
    },
    {
      title: 'Slider',
      category: 'HTML/CSS/JS',
      url: 'https://ramesha56.github.io/js-slider/',
      image: '/projects/slider.png',
    },
    {
      title: 'Food Website',
      category: 'HTML/CSS/JS',
      url: 'https://ramesha56.github.io/food-items/',
      image: '/projects/food.png',
    },
  ],

  "Firebase": [
    {
      title: 'Task ',
      category: 'Firebase',
      url: 'https://ramesha56.github.io/hacathon/',
      image: '/projects/task.png',
    },
    {
      title: 'Recipes ',
      category: 'Firebase',
      url: 'https://ramesha56.github.io/project/',
      image: '/projects/recipes.png',
    },
    {
      title: 'Blogs',
      category: 'Firebase',
      url: 'https://ramesha56.github.io/techtalks/',
      image: '/projects/blog.png',
    },
  ],

  "Mern": [
    {
      title: 'Hijab-style',
      category: 'Mern',
      url: 'https://hijab-styles-front.vercel.app/',
      image: '/projects/hijab.png',
    };
  ]

  

  "React": [    
    {
      title: 'Arooma',
      category: 'React',
      url: 'https://perfumes-react.vercel.app/',
      image: '/projects/aroma.png',
    },
     {
      title: 'Islamic Learning ',
      category: 'React',
      url: 'https://islamic-self.vercel.app/',
      image: '/projects/islamic.png',
    },
  
    {
      title: 'World Flags ',
      category: 'React',
      url: 'http://flags-api-react-beta.vercel.app/',
      image: '/projects/flags.png',
    },

           {
      title: '14-Aug',
      category: 'React',
      url: 'https://14-aug.vercel.app/',
      image: '/projects/14.png',
    },
  ],

  "Applications": [
    {
      title: 'Filteration',
      category: 'App',
      url: 'https://ramesha56.github.io/unsplash_Api/',
      image: '/projects/filter.png',
    },
    {
      title: 'Todo App',
      category: 'App',
      url: 'https://ramesha56.github.io/Todo-App/',
      image: '/projects/todo.png',
    },
    {
      title: 'counting/tables',
      category: 'App',
      url: 'https://ramesha56.github.io/math_solution/',
      image: '/projects/math.png',
    },
    {
      title: 'ATM',
      category: 'App',
      url: 'https://ramesha56.github.io/ATM/',
      image: '/projects/atm.png',
    },
    {
      title: 'Guessing Game',
      category: 'App',
      url: 'https://ramesha56.github.io/guess-game/',
      image: '/projects/guess.png',
    },
    {
      title: 'Weather',
      category: 'App',
      url: 'https://ramesha56.github.io/weather/',
      image: '/projects/weather.png',
    },
    {
      title: 'Quiz App',
      category: 'App',
      url: 'https://ramesha56.github.io/quiz/',
      image: '/projects/quiz.png',
    },
    {
      title: 'Eid Mubarak',
      category: 'App',
      url: 'https://ramesha563.github.io/Eid-Mubarak/',
      image: '/projects/eid.png',
    }, 
    
  ],
};

const Projects = () => {
  const [showAll, setShowAll] = useState({});

  const handleToggle = (type) => {
    setShowAll((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>

      {Object.entries(projectData).map(([type, projects]) => {
        const showMore = showAll[type];
        const shouldCollapse = (type === 'Frontend' || type === 'Applications') && !showMore;
        const visibleProjects = shouldCollapse ? projects.slice(0, 3) : projects;

        return (
          <div key={type} className="project-category-block">
            <h3 className="category-heading">{type} Projects</h3>
            <div className="project-grid">
              {visibleProjects.map((proj, index) => (
                <div key={index} className="project-card">
                  <img src={proj.image} alt={proj.title} className="project-img" />
                  <div className="card-header">
                    <span className="category">{proj.category}</span>
                    <a href={proj.url} target="_blank" rel="noopener noreferrer" className="eye-icon">
                      <FaEye />
                    </a>
                  </div>
                  <h3>{proj.title}</h3>
                </div>
              ))}
            </div>
            {(type === 'Frontend' || type === 'Applications') && (
              <button className="see-more-btn" onClick={() => handleToggle(type)}>
                {showMore ? 'See Less' : 'See More'}
              </button>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
