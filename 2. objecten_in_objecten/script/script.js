const arrPersonen = [
  {
    naam: 'Dieter',
    leeftijd: 42,
    kinderen: [
      {
        naam: 'Ella-Louise',
        leeftijd: 14,
      },
      {
        naam: 'Ewoud',
        leeftijd: 12,
      },
    ],
  },
  {
    naam: 'Christophe',
    leeftijd: 38,
    kinderen: [],
  },
  {
    naam: 'Tine',
    leeftijd: 36,
    kinderen: [
      {
        naam: 'Louise',
        leeftijd: 7,
      },
      {
        naam: 'Jules',
        leeftijd: 5,
      },
    ],
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
        html += `<li>${kind.naam} (${kind.leeftijd})</li>`;
      }
      html += `</ol></li>`;
    }
  }
  html += `</ul>`;
  htmlResultaat.innerHTML = html;
};

const toonPersonenMetDeGemiddeldeLeeftijdVanDeKinderen = function () {
  const htmlResultaat = document.querySelector('.js-resultaat');
  let html = '<ul>';

  //Starten van de EERSTE lus.
  for (const persoon of arrPersonen) {
    // tonen van de naam van de persoon in de console
    console.log(persoon.naam);

    // toevoegen van de naam van de persoon aan de html
    html += `<li class="mb-3">${persoon.naam} is ${persoon.leeftijd} jaar oud`;

    let totaleleeftijd = 0;
    //indien een persoon kinderern heeft zulen we deze tonen
    if (persoon.kinderen.length > 0) {
      //tonen van de kinderen in de console
      console.log(`${persoon.kinderen}`);

      // Starten van de TWEEDE lus
      for (const kind of persoon.kinderen) {
        //optellen van de leeftijd van het kind
        totaleleeftijd += kind.leeftijd;
      }
      html += `<br>De gemiddelde leeftijd van de kinderen van deze persoon is ${totaleleeftijd / persoon.kinderen.length}</li>`;
    }
  }
  html += `</ul>`;
  htmlResultaat.innerHTML = html;
};

const init = function () {
  console.log('functie gestart');
  //toonPersonenEnHunKinderenInEenLijst();
  toonPersonenMetDeGemiddeldeLeeftijdVanDeKinderen();
};

document.addEventListener('DOMContentLoaded', init);
