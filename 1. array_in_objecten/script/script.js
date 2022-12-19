const arrPersonen = [
  {
    naam: 'Dieter',
    leeftijd: 42,
    kinderen: ['Ella-Louise', 'Ewoud'],
  },
  {
    naam: 'Christophe',
    leeftijd: 38,
    kinderen: [],
  },
  {
    naam: 'Tine',
    leeftijd: 36,
    kinderen: ['Louise', 'Jules'],
  },
];

const toonPersonenEnHunKinderenInEenLijst = function () {
  const htmlResultaat = document.querySelector('.js-resultaat');
  let html = '<ul>';

  //Starten van de EERSTE lus.
  for (const persoon of arrPersonen) {
    // tonen van de naam van de persoon in de console
    console.log(persoon.naam);

    // toevoegen van de naam van de persoon aan de html
    html += `<li class="mb-3">${persoon.naam} is ${persoon.leeftijd} jaar oud`;

    //indien een persoon kinderern heeft zulen we deze tonen
    if (persoon.kinderen.length > 0) {
      //tonen van de kinderen in de console
      console.log(`${persoon.kinderen}`);

      //toevoegen van de kinderen aan de html
      html += `<ol>`;

      // Starten van de TWEEDE lus
      for (const kind of persoon.kinderen) {
        html += `<li>${kind}</li>`;
      }
      html += `</ol></li>`;
    }
  }
  html += `</ul>`;
  htmlResultaat.innerHTML = html;
};

const toonPersonenEnHunJongsteKindInEenLijst = function () {
  const htmlResultaat = document.querySelector('.js-resultaat');
  let html = '<ul>';

  //Starten van de EERSTE lus.
  for (const persoon of arrPersonen) {
    // tonen van de naam van de persoon in de console
    console.log(persoon.naam);

    // toevoegen van de naam van de persoon aan de html
    html += `<li>${persoon.naam} is ${persoon.leeftijd} jaar oud</li>`;

    //indien een persoon kinderern heeft zulen we deze tonen
    if (persoon.kinderen.length > 0) {
      //tonen van de kinderen in de console
      console.log(`${persoon.kinderen}`);

      //toevoegen van de kinderen aan de html
      html += `<ol>`;
      // HIER IS GEEN TWEEDE LUS NODIG: We overlopen niet alle kinderen, maar enkel het laastste kind
      html += `<li>${persoon.kinderen[persoon.kinderen.length - 1]}</li>`;
      html += `</ol>`;
    }
  }
  html += `</ul>`;
  htmlResultaat.innerHTML = html;
};

const init = function () {
  console.log('functie gestart');
  toonPersonenEnHunKinderenInEenLijst();
  //toonPersonenEnHunJongsteKindInEenLijst();
};

document.addEventListener('DOMContentLoaded', init);
