// IMPORTS
import {projects, getProjects} from './projectsData.js';



// Functions

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const createProjectCards = (array) => {
  getProjects();
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
  getProjects();
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
