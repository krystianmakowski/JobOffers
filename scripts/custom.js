// Elements
const companyName = document.querySelector('#companyName');
const street = document.querySelector('#street');
const city = document.querySelector('#city');

const offerName = document.querySelector('#offerName');
const offerDescription = document.querySelector('#offerDescription');
const experience = document.querySelector('#experience');
const remote = document.querySelector('#remote');
const technology = document.querySelector('#technology');
const salaryMin = document.querySelector('#salaryMin');
const salaryMax = document.querySelector('#salaryMax');
const offerLink = document.querySelector('#offerLink');

const saveOffer = document.querySelector('#saveOffer');

const listOffers = document.querySelector('#listOffers');


const offer1 = {
  companyName: "Dev Technology",
  street: "Kwiatowa 112/3",
  city: "Poznań",
  offerName: "Junior PHP Developer",
  offerDescription: "Cześć! Szukamy młodszego programisty PHP do Naszej firmy. Jeśli jesteś zainteresowany - kliknij przycisk 'aplikuj'!",
  experience: "junior",
  remote: "tak",
  technology: "php",
  salaryMin: 4000,
  salaryMax: 7000,
  offerLink: "https://devtechnology.com/careers/careers-apply/?jobid=5229965002"
};

const offer2 = {
  companyName: "ITLT",
  street: "Taśmowa 7",
  city: "Warszawa",
  offerName: "Senior Java Developer",
  offerDescription: "IT LeasingTeam realizuje usługi w zakresie pozyskiwania dla organizacji wysokiej klasy specjalistów i kadry zarządzającej z obszaru IT a także rozwija i wdraża nowoczesne rozwiązania IT w ramach outsourcingu procesów",
  experience: "senior",
  remote: "tak",
  technology: "java",
  salaryMin: 18480,
  salaryMax: 23520,
  offerLink: "https://praca.itlt.pl/oferty-pracy/?UID=MjQwOThfMF8xOTY3_0&hrlink_ajax=true&"
};

const offer3 = {
  companyName: "Fitatu Sp. z o.o.",
  street: "Wyspiańskiego 10",
  city: "Poznań",
  offerName: "Front-end developer",
  offerDescription: "Vitalia.pl - największy serwis diet online w Polsce, na rynku od 16 lat!",
  experience: "mid",
  remote: "nie",
  technology: "javascript",
  salaryMin: 10000,
  salaryMax: 15500,
  offerLink: "https://justjoin.it/offers/fitatu-sp-z-o-o-front-end-developer"
};

const offer4 = {
  companyName: "Crestt",
  street: "Centrum",
  city: "Warszawa",
  offerName: "C# Developer ~.NET 5, DDD, Microservices",
  offerDescription: "Aktualnie poszukujemy C# Developera do nowego projektu. Lokalizacja pracy: 100% zdalnie, także po pandemii. Spotkania integracyjne zespołu ok 6 razy w roku.",
  experience: "mid",
  remote: "tak",
  technology: "c#",
  salaryMin: 13000,
  salaryMax: 16000,
  offerLink: "https://www.crestt.pl/o-nas/praca/net-developer/"
};

let offers = [offer1, offer2, offer3, offer4]

const createOffer = () => {
  const newOffer = {
    companyName: companyName.value,
    street: street.value,
    city: city.value,
    offerName: offerName.value,
    offerDescription: offerDescription.value,
    experience: experience.value,
    remote: remote.value,
    technology: technology.value,
    salaryMin: salaryMin.value,
    salaryMax: salaryMax.value,
    offerLink: offerLink.value
  };

  offers.unshift(newOffer);
  displayOffers(offers);
};


const displayOffers = function (offers) {
  listOffers.innerHTML = '';
  offers.forEach(function (offer, index) {
    const html = `
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading-${index}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#offer-${index}" aria-expanded="false" aria-controls="#offer-${index}">
              ${offer.offerName}
            </button>
          </h2>
          <div id="offer-${index}" class="accordion-collapse collapse" aria-labelledby="heading-${index}" data-bs-parent="#listOffers">
            <div class="accordion-body">
            <div class="row">
              <div class="col-sm">
                <p class="fw-lighter">Firma:</p>
                ${offer.companyName}<br>${offer.street}<br>${offer.city}<br><br>
                <p class="fw-lighter">Opis oferty:</p>
                ${offer.offerDescription}
              </div>
              <div class="col-sm">
                <p class="fw-lighter">Doświadczenie:</p>
                <span class="text-capitalize">${offer.experience}</span><br><br>
                <p class="fw-lighter">Praca zdalna:</p>
                <span class="text-capitalize">${offer.remote}</span>
              </div>
              <div class="col-sm">
                <p class="fw-lighter">Technologia:</p>
                <span class="text-uppercase">${offer.technology}</span><br><br>
                <p class="fw-lighter">Pensja:</p>
                <span class="text-uppercase">${offer.salaryMin} PLN - ${offer.salaryMax} PLN</span><br><br>
                <a href="${offer.offerLink}" class="btn btn-primary btn-lg text-uppercase" target="_blank">Aplikuj</a>
              </div>
            </div>
            </div>
          </div>
        </div>
        `;

    listOffers.insertAdjacentHTML('afterbegin', html);
  });
}

displayOffers(offers);
saveOffer.addEventListener('click', createOffer)
