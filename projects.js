const projects = [
  {
    title: "ColorFlipper", 
    screenshot: "/img/colorflipper.png", 
    description: "My first web app. A simple site where you choose colors in two fun modes! I think this site is a good starting place to learning how to manipulate the DOM.", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: ["HTML", "CSS", "JavaScript", "GitHub"],
    available: true,
    url: "https://600da9cd107a9426e133ee63--elastic-volhard-0880e6.netlify.app/index.html", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-14/color-flipper-hack-jrobinson0529",
  },
  {
    title: "CoolProject", 
    screenshot: "/img/colorflipper.png", 
    description: "My first web app. A simple site where you choose colors in two fun modes! I think this site is a good starting place to learning how to manipulate the DOM.", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: ["HTML", "CSS", "JavaScript", "GitHub", "Bootstrap"],
    available: true,
    url: "https://600da9cd107a9426e133ee63--elastic-volhard-0880e6.netlify.app/index.html", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-14/color-flipper-hack-jrobinson0529",
  },
  {
    title: "ColorFlipper", 
    screenshot: "/img/colorflipper.png", 
    description: "My first web app. A simple site where you choose colors in two fun modes! I think this site is a good starting place to learning how to manipulate the DOM.", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: ["HTML", "CSS", "JavaScript", "GitHub", "Git", "Ruby", "React", "Jquery"],
    available: true,
    url: "https://600da9cd107a9426e133ee63--elastic-volhard-0880e6.netlify.app/index.html", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-14/color-flipper-hack-jrobinson0529",
  },
];
const technologiesUsed = [
  {
    imgSrc: "/img/javascript-logo-8892AEFCAC-seeklogo.com.png",
    alt: "JavaScript Logo"
  }
];
// DOM Target variables
const projectsPage = document.querySelector('#projectsPage');


// Functions

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const createProjectCards = (array) => {
  let domString = '';
  array.forEach((element, i) => {
    domString += `<div class="card mx-auto" style="width: 60%;" id=${i}>
                    <img src=${element.screenshot} class="card-img-top" alt="screenshot of a webpage">
                    <div class="card-body">
                      <h5 class="card-title fs-2 text-center mb-4">${element.title}</h5>
                      <p class="card-text fs-4 mb-3">${element.description}</p>
                    </div>
                    <div class="card-header fs-3 text-center">Technologies Used:</div>
                      <ul class="list-group list-group-horizontal" id="techList${i}">
                      </ul>
                    <div class="card-body">
                      <a href="${element.url}" class="card-link text-decoration-none fs-5">Webpage</a>
                      <a href="${element.githubUrl}" class="card-link text-decoration-none fs-5">GitHub</a>
                    </div>
                  </div>`;
                  if(element.available === true){printToDom('#projectsPage', domString);}
                  
  });
  
};
// Dynamically add technologies used based on the obj.technologiesUsed property in projects
const addTechProjectCards = (array) => {
  let domString = '';
  for (let i=0; i < array.length; i++) {
    for (let j=0; j < array[i].technologiesUsed.length; j++) {
      domString += `<li class="list-group-item flex-fill text-center">${array[i].technologiesUsed[j]}</li>
      `;
    }
    printToDom('#techList' + i , domString);
    domString = '';
  }
  
};

const init = () => {
  createProjectCards(projects);
  addTechProjectCards(projects);
};
init();
