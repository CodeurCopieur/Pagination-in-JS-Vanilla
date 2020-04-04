const list_jobs = [
  {
    image: "https://media-exp1.licdn.com/dms/image/C4D0BAQEeQG7fAPsBHw/company-logo_100_100/0?e=1593648000&amp;v=beta&amp;t=dSytKTYZmKumz1vaZH76E9vCbplT9yNXhF1pzSlVz3Y",
    name_job: "Graphist Designer H/F",
    name_company: "Eurosport",
    name_city: "Issy-les-Moulineaux",
    time_job: "1 jour"
  },
  {
    image: "https://media-exp1.licdn.com/dms/image/C4E0BAQE6fZyqB5Dwsw/company-logo_100_100/0?e=1594252800&v=beta&t=nuBTmGuoJUAVqmEB6NCNPrexsH4luoCsl85AWd6FieU",
    name_job: "Développeur ReactJS",
    name_company: "Meetic",
    name_city: "Paris",
    time_job: "3 jours"
  },
  {
    image: "https://media-exp1.licdn.com/dms/image/C4E0BAQGlYGeEKoHDqg/company-logo_100_100/0?e=1594252800&v=beta&t=d-GkNFhIIq2XCikmCyb8AqWaP4bRuQ4bDD9_VikdvpM",
    name_job: "Développeur Front-End React (H/F)",
    name_company: "Eleven Labs",
    name_city: "Paris",
    time_job: "5 jours"
  },
  {
    image: "https://media-exp1.licdn.com/dms/image/C560BAQH-RM-yDUrjYQ/company-logo_100_100/0?e=1594252800&v=beta&t=A6yL4Bv4zfTOZGx4eGRAjCTkDREKPmg6OrP5SgcUuPw",
    name_job: "Développeur front-end",
    name_company: "Leetchi.com",
    name_city: "Paris",
    time_job: "3 jours"
  },
  {
    image: "https://media-exp1.licdn.com/dms/image/C560BAQFdyW3RkJ6KMw/company-logo_100_100/0?e=1594252800&v=beta&t=7PMAcvNkcJeC1cUYWKWyTRIL8DrJMCHV4rUgm0CzQMQ",
    name_job: "Développeur Front end Javascript",
    name_company: "ITELIOS",
    name_city: "Région de Paris",
    time_job: "1 jour"
  },
  {
    image: "https://media-exp1.licdn.com/dms/image/C4E0BAQHCHoAT5YxwpQ/company-logo_100_100/0?e=1594252800&v=beta&t=w3lLCl0G20RJtSwRVodhcAWJXTxHEq09xx1WEXVn_gc",
    name_job: "Développeur(se) JavaScript​",
    name_company: "beNext",
    name_city: "Paris",
    time_job: "3 jours"
  },
  {
    image: "https://media-exp1.licdn.com/dms/image/C560BAQEloqEBLHUukg/company-logo_100_100/0?e=1594252800&v=beta&t=nBWQfbX6BlPwAY7PaEPE9hF2iqbm12pnFqCVMXdDjqg",
    name_job: "Product Designer",
    name_company: "Devoteam",
    name_city: "Paris",
    time_job: "2 jours"
  },
  {
    image: "https://media-exp1.licdn.com/dms/image/C4E0BAQE6fZyqB5Dwsw/company-logo_100_100/0?e=1594252800&v=beta&t=nuBTmGuoJUAVqmEB6NCNPrexsH4luoCsl85AWd6FieU",
    name_job: "Développeur ReactJS",
    name_company: "Meetic",
    name_city: "Paris",
    time_job: "3 jours"
  },
  {
    image: "https://media-exp1.licdn.com/dms/image/C4D0BAQEeQG7fAPsBHw/company-logo_100_100/0?e=1593648000&amp;v=beta&amp;t=dSytKTYZmKumz1vaZH76E9vCbplT9yNXhF1pzSlVz3Y",
    name_job: "Graphist Designer H/F",
    name_company: "Eurosport",
    name_city: "Issy-les-Moulineaux",
    time_job: "1 jour"
  },
  {
    image: "https://media-exp1.licdn.com/dms/image/C4E0BAQE6fZyqB5Dwsw/company-logo_100_100/0?e=1594252800&v=beta&t=nuBTmGuoJUAVqmEB6NCNPrexsH4luoCsl85AWd6FieU",
    name_job: "Développeur ReactJS",
    name_company: "Meetic",
    name_city: "Paris",
    time_job: "3 jours"
  },
  {
    image: "https://media-exp1.licdn.com/dms/image/C4D0BAQEeQG7fAPsBHw/company-logo_100_100/0?e=1593648000&amp;v=beta&amp;t=dSytKTYZmKumz1vaZH76E9vCbplT9yNXhF1pzSlVz3Y",
    name_job: "Graphist Designer H/F",
    name_company: "Eurosport",
    name_city: "Issy-les-Moulineaux",
    time_job: "1 jour"
  },
  {
    image: "https://media-exp1.licdn.com/dms/image/C4E0BAQE6fZyqB5Dwsw/company-logo_100_100/0?e=1594252800&v=beta&t=nuBTmGuoJUAVqmEB6NCNPrexsH4luoCsl85AWd6FieU",
    name_job: "Développeur ReactJS",
    name_company: "Meetic",
    name_city: "Paris",
    time_job: "3 jours"
  }
];

const card_list = document.querySelector('.card-list');
const card_numbers = document.querySelector('.card-numbers__list-btn');

let current_page = 1; //page en cour
let rows = 4; //nombre d'items par page

function getList(jobs, wrapper, rows_per_page, page){

  wrapper.innerHTML = "";
  page--; // 0

  let start = rows_per_page * page; // 0 = 4 * 0
  let end = start + rows_per_page; // 4 = 0 + 4

   //tableau d'objet de 0 à 4
   let paginatedItems = jobs.slice(start, end); // 0, 4

  console.log(paginatedItems);
  // on parse le tableau d'objet
  paginatedItems.forEach(item => {

    const template =  `<li class="card-job"><a class="card-job__link">
  <div class="card-job__wrapper-icone"><i class="icon ion-md-more"></i></div>
  <div class="card-job__image">
    <figure class="card-job__wrapper"><img class="card-job__logo" src="${item.image}" alt="" width="54" height="54"/></figure>
  </div>
  <div class="card-job__content-wrapper">
    <div class="card-job__wrapper-title">
      <h3 class="card-job__title">${item.name_job}</h3>
      <h4 class="card-job__company-name">${item.name_company}</h4>
      <div class="card-job__location"><span> <i class="icon ion-md-pin"></i></span>
        <h5 class="card-job__city-name">${item.name_city}</h5>
      </div>
    </div>
    <div class="card-job__footer"><span class="card-job__time">il y a ${item.time_job}</span></div>
  </div>
  </a></li>`;

    wrapper.insertAdjacentHTML('beforeend', template);

  });

}


function setupPagination(jobs, wrapper, rows_per_page) {
  wrapper.innerHTML = "";

  console.log(jobs.length);
  
  //Math.ceil =>  retourne en nombre entier
  let page_count = Math.ceil(jobs.length / rows_per_page); // 2.5 avec ceil => 3 = 12 / 5;
  //page_count => nombre de page (taille du tableau / nombre d'items par page)
  console.log(page_count);

  for (let index = 1; index < page_count + 1; index++) {
   
    let btn = paginationBtn(index)
    
    //on affecte à la variable " btn " la fonction pagination() on lui met en paramètre index de la boucle for
    wrapper.appendChild(btn);
    //.card-numbers__list-btn on lui ajoute un enfant " btn "
  }

}

function paginationBtn(page) {
  let btn = document.createElement('li')
  btn.innerText = page;
  btn.classList.add('card-number__btn');

  if (current_page == page ) btn.classList.add('active');

  return btn;
}

getList(list_jobs, card_list, rows, current_page);
/*
cette fonction prend en parmètre : tableau d'objets (list_jobs), container (.card-list), nombre d'items par page (rows), page en cour (current_page)
*/

setupPagination(list_jobs, card_numbers, rows);
/*
cette fonction prend en parmètre : tableau d'objets (list_jobs), container (.card-numbers__list-btn), nombre d'items par page (rows)
*/





