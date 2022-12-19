const arrPersonen = [
  {
    naam: 'Dieter',
    img: 'didi.webp',
    leeftijd: 42,
  },
  {
    naam: 'Christophe',
    img: 'chichi.webp',
    leeftijd: 38,
  },
  {
    naam: 'Tine',
    img: 'titi.webp',
    leeftijd: 36,
  },
];

const toonSmoel = function () {
  const htmlResultaat = document.querySelector('.js-resultaat');
  let html = ``;
  for (const persoon of arrPersonen) {
    // tonen van de naam van de persoon in de console
    console.log(persoon.naam);

    // toevoegen van de naam van de persoon aan de html
    html += `<div class="col-2">
              <div class="card">
                <img class="card-img-top" src="../images/${persoon.img}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${persoon.naam}</h5>
                    <p class="card-text">Deze persoon is momenteel ${persoon.leeftijd} jaar.</p>
                </div>
              </div>
            </div>`;
  }
  console.log(html);
  htmlResultaat.innerHTML = html;
};

const init = function () {
  console.log('functie gestart');
  toonSmoel();
};

document.addEventListener('DOMContentLoaded', init);
