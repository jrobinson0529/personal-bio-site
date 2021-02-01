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
    domString += `<div class="card p-3" style="width: 35rem;" id=${i}>
    <div class="modal fade" id="modal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title fs-1" id="exampleModalLabel">Technologies Used</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body fs-3">
           ${element.technologiesUsed}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  
  
  <h5 class="card-title fs-2 text-center mb-4">${element.title}</h5>
                    <img src=${element.screenshot} class="card-img-top" alt="screenshot of a webpage">
                    <hr>
                    <div class="card-body">
                      <p class="card-text fs-3 mb-3">${element.description}</p>
                    </div>
                    <hr>
                    <div class="card-body d-flex foot-container">
                    <div class="w-50 d-flex flex-column">
                      <a href="${element.url}" class="card-link text-decoration-none fs-4" target="_blank">Webpage</a>
                      <a href="${element.githubUrl}" class="card-link text-decoration-none fs-4 mx-0" target="_blank">GitHub</a>
                    </div>
                    <div class="w-50 d-flex justify-content-end">
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal${i}">
                    TECH USED
                    </button>
                      </div>
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
