// Tehtävä 1:

// Muuta sivun ensimmäinen otsikko (sekä koko html:n title)
function changeHeading() {
    document.title = "Muokattu otsikko!";
    let h = document.querySelectorAll("h2"); // tästä voisi tehdä globaalin muuttujan, mutta pidetään funktion scopessa

    h[0].innerHTML = "Muokattu otsikko!";

}

// Funktio, joka muuttaa sivun "Tehtävä 2" -otsikon tyyliä.
// JavaScriptin tulee muuttaa vähintään fonttikokoa, tyyliä, väritystä sekä taustaväriä.
function changeStyle() {
    let h = document.querySelectorAll("h2");

    h[1].style.fontSize = "large";
    h[1].style.color = "red";
    h[1].style.backgroundColor = "green";
    h[1].style.border = "thick solid #0000FF"

}

// muuta em-tagin sisältöä sivulla
function changeContent() {
    let c = document.querySelectorAll("em");

    c[0].innerHTML = `"Tämä on `;
    c[1].innerHTML = `esimerkkiteksti, joka on hienosti kursivoitu."<br><br>`;
}

// Tehtävä 2:

function changeCar() {
    
    let x = document.querySelector("#carimage");

    let i = document.getElementById("mySelect").selectedIndex;

    let v = document.getElementsByTagName("option")[i].value;

    if (v == "BMW") {
        x.src = "https://www.bmw.fi/content/dam/bmw/common/all-models/m-series/m8-coupe/2022/navigation/bmw-8series-coupe-modellfinder.png"
    }
    else if (v == "Audi") {
        x.src = "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grz5x432LHxE3WfU0dkTsecZz-O6OhjoEVqItxFZBgXgIk-LYDCU5XBjAJMm8NiKgE8ZmsmRkYWCuAjEgGEODjKy3KKUgsSszVK89MKckQ1DAgEgizu7iGOHr6BAMAYiN-0OkAAAA"
    }
    else if (v == "Mercedes") {
        x.src = "https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_5,y_59,w_1682,h_946/auto-client/9f7d62235b52f013d73f6b7d0d330de0/emerald_green.png"
    }
    else {
        x.src = "https://www.evspecifications.info/wp-content/uploads/2020/01/volvo-xc60-t8-evchargeplus-00-1-1024x680.png"
    }
}

// Kuuntelija, joka saa aikaan sen että kun hiiri siirtyy kuvan päälle, kuvan ympärille tulee näkyä värillinen reunus. 
// Kun hiiri poistuu, reunus katoaa.
let carimage = document.querySelector("#carimage");

carimage.addEventListener('mouseover', function () {
    carimage.style.outline = "thick solid #0000FF";
});
carimage.addEventListener('mouseout', function () {
    carimage.style.outline = "none";
});

// Tehtävä 3:
function validateForm() {
    let name = document.querySelector("#nimi").value;
    let position = document.querySelector("#tehtava").value;
    let salary = document.querySelector("#palkka").value;

    // Varoitus-merkkijonot
    const shortName = "Liian lyhyt nimi.";
    const positionEmpty = "Tehtävä-kenttä on tyhjä."
    const salaryOnlyNumbers = "Palkan täytyy olla enemmän kuin 0 ja palkka-kenttä sallii vain numeroita."

    const minNameLength = 5;

    // luodaan tyhjä taulukko, johon lisätään virheilmoitukset. muuten if-lausekkeita tulisi aivan liikaa jos halutaan tarkistaa kaikki permutaatiot
    let errors = [];

    if (name.length <= minNameLength) {
        errors.push(shortName);
    }
    if (position.trim() === "") {
        errors.push(positionEmpty);
    }
    if (Number(salary) <= 0 || isNaN(salary)) {
        errors.push(salaryOnlyNumbers);
    }

    // jos virheitä löytyy, kerrotaan se käyttäjälle.
    if (errors.length > 0) {
        alert(errors.join("\n"));
    }
    else {
        // jos validointi OK, syötetään formin data taulukkoon (uudella rivillä)
        let table = document.querySelector("tbody");
        let row = table.insertRow();

        let cell_name = row.insertCell(0);
        let cell_position = row.insertCell(1);
        let cell_salary = row.insertCell(2);

        cell_name.innerHTML = name;
        cell_position.innerHTML = position;
        cell_salary.innerHTML = `$${salary}`;
    }
}

