// Array of projects
const projects = [
  {
    title: 'Project 1',
    description: "A showcase of my Web Dev's first project.",
    url: ' https://brendamundowa.github.io/web-project-one/',
  },
    {
      
        title: 'Project 2',
        description: "A showcase of Dev Web Project 2 projects.",
        url: ' https://brendamundowa.github.io/workspace/'
      },
      {
        title: 'Project 3',
        description: "A showcase of Web Development Project 3  .",
        url: 'https://brendamundowa.github.io/web-project-three'
      },
      
     {
      title: 'Food App',
      description: 'A collection Food App design project.',
      url: ''
    },
    {
      title: 'Waste Application',
      description: "A showcase of Brenda's first design project.",
      url: ''
    },
    
    {
      title: 'Freight Solutions',
      description: 'A showcase of Freight Solutions project.',
      url: ''
    },
    
    {
      title: 'Real  Estate Project',
      description: "A showcase of Design Real Estate project.",
      url: '../images/real.png'
    },
    {
      title: 'Watch project',
      description: "A showcase of Design Watch project.",
      url: 'https://www.figma.com/proto/SDCa0nllHIx3t6MDlW2zfg/WATCH-AND-JAMESON-WEB?page-id=40%3A2&node-id=40-3&node-type=frame&viewport=691%2C-320%2C0.13&t=fUwNNHImaT71490R-1&scaling=min-zoom&content-scaling=fixed',
    },
    {
      title: 'Jameson',
      description: "A showcase of Design Jameson project.",
      url: '',
    },
    
  ];
  
  // Function to load projects
  function loadProjects() {
    const projectList = document.getElementById('project-list');
    
    projects.forEach((project) => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
  
      projectCard.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <iframe src="${project.url}" title="${project.title}" class="project-iframe"></iframe>
      `;
  
      projectList.appendChild(projectCard);
    });
  }
  
  // Load projects when DOM is fully loaded
  document.addEventListener("DOMContentLoaded", loadProjects);
  