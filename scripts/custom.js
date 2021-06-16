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

const offers = []

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


const displayOffers = function(offers) {
    offers.forEach(function(offer, index) {
        const html = `
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading-${index}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#offer-${index}" aria-expanded="false" aria-controls="#offer-${index}">
              ${offer.offerName}
            </button>
          </h2>
          <div id="offer-${index}" class="accordion-collapse collapse" aria-labelledby="heading-${index}" data-bs-parent="#listOffers">
            <div class="accordion-body">
              ${offer.street} ${offer.city}
            </div>
          </div>
        </div>
        `;

        listOffers.insertAdjacentHTML('afterbegin', html);
    });
}


saveOffer.addEventListener('click', createOffer)
