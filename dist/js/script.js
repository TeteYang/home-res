//preloader
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }
//translator
let toggler = document.querySelector('input'),
    linkHome = document.querySelector('.link-home'),
    linkProject = document.querySelector('.link-proj'),
    linkContact = document.querySelector('.link-contact'),
    linkSkills = document.querySelector('.link-skills');
    greetH1 = document.querySelector('.greeting__h1'),
    greetH2 = document.querySelector('.greeting__h2'),
    greetH3 = document.querySelector('.greeting__h3');
    allProjects = document.querySelector('.all-projects');
    boxSkills = document.querySelector('.skills__phr');
    boxContact = document.querySelector('.contact__phr');
const greetItemEn = {
    linkHomeEn: 'Home',
    linkProjectEn: 'Progects',
    linkContactEn: 'Contact',
    linkSkillsEn: 'My Skills',
    welcomeEn: 'Welcome',
    nameEn: 'My name is Anna',
    profEn: "I'm junior frontend developer",
    allProjectsEn: 'These are some of my projects',
    boxSkillsEn: 'Skills',
    boxContactEn: 'Get in touch'
}
const greetItemRu = {
    linkHomeRu: 'Главная',
    linkProjectRu: 'Проекты',
    linkContactRu: 'Контакты',
    linkSkillsRu: 'Мои Навыки',
    welcomeRu: 'Добро пожаловать',
    nameRu: 'Меня зовут Анна',
    profRu: 'junior frontend developer',
    allProjectsRu: 'Здесь собраны некоторые из моих проектов',
    boxSkillsRu: 'Мои Навыки',
    boxContactRu: 'Связь со мной'

}

const {linkHomeEn, linkProjectEn, linkContactEn, linkSkillsEn, welcomeEn, nameEn, profEn, allProjectsEn, boxSkillsEn, boxContactEn} = greetItemEn;
const {linkHomeRu, linkProjectRu, linkContactRu, linkSkillsRu,welcomeRu, nameRu, profRu, allProjectsRu, boxSkillsRu, boxContactRu} = greetItemRu;
toggler.addEventListener('change', function(e){
    if(e.target.checked){
        linkHome.textContent = linkHomeEn;
        linkProject.textContent = linkProjectEn;
        linkContact.textContent = linkContactEn;
        linkSkills.textContent = linkSkillsEn;
        greetH1.textContent = welcomeEn;
        greetH2.textContent = nameEn;
        greetH3.textContent = profEn;
        allProjects.textContent = allProjectsEn;
        boxSkills.textContent = boxSkillsEn;
        boxContact.textContent = boxContactEn;
    } else{
        linkHome.textContent = linkHomeRu;
        linkProject.textContent = linkProjectRu;
        linkContact.textContent = linkContactRu;
        linkSkills.textContent = linkSkillsRu;
        greetH1.textContent = welcomeRu;
        greetH2.textContent = nameRu;
        greetH3.textContent = profRu;
        allProjects.textContent = allProjectsRu;
        boxSkills.textContent = boxSkillsRu;
        boxContact.textContent = boxContactRu;
    }  
});

//scroll up

let upPage = document.querySelector('a[href*="#up"]');
console.log(upPage);
window.addEventListener('scroll', whereScroll);

function whereScroll(){
    const scrolled = window.scrollY;
    if (scrolled < 1400){
        upPage.style.display = 'none';
    }
    else{
        upPage.style.display = 'block';
    }
}

upPage.addEventListener('click', slowScroll);

function slowScroll(e){
    e.preventDefault();
    const blockID = upPage.getAttribute('href');
    document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
}
