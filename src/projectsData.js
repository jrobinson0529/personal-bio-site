export const projects = [
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









export const getProjects = () => {
  return projects;
};
