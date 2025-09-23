// Harjoitus 1
let nappi = document.querySelector('button');

nappi.addEventListener('click', function () { alert("Klikkasit minua!"); });

function showTable() {
    let taulukko = document.querySelector("#taulukonPaikka");
    taulukko.innerHTML =
        `<table id="example" class="display" border="1">
        <thead>
            <tr>
                <th>Nimi</th>
                <th>Tehtävä</th>
                <th>Palkka</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>$320,800</td>
            </tr>
            <tr>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>$170,750</td>
            </tr>
            <tr>
                <td>Ashton Cox</td>
                <td>Junior Technical Author</td>
                <td>$86,000</td>
            </tr>
            <tr>
                <td>Cedric Kelly</td>
                <td>Senior Javascript Developer</td>
                <td>$433,060</td>
            </tr>
            <tr>
                <td>Airi Satou</td>
                <td>Accountant</td>
                <td>$162,700</td>
            </tr>
        </tbody>
    </table>`;
}

// Harjoitus 2


let otiskko = document.querySelector("#harjoitus2Otsikko");
otiskko.addEventListener('mouseover', function () { console.log("Stepped over my mouse!"); });

let otsikko2 = document.querySelector("#harjoitus1Otsikko");
otsikko2.addEventListener('click', function () { otsikko2.innerHTML = "Bye bye mouse!"; document.getElementById("harjoitus1Otsikko").style.color = "red"; });

// Harjoitus 3

let kentta = document.querySelector("#textdata");
kentta.addEventListener('focus', function () {
    kentta.innerHTML = "Please fill in the form with proper data."
});

let luku = 1;
kentta.addEventListener('keydown', function () { document.getElementById("charcount").innerHTML = luku++ });

// Tarkista onko tekstikenttä (textdata) tyhjä

function validateForm() {
    let laheta = document.querySelector("#send-button");

    laheta.addEventListener('click', function () {
        let tekstialue = document.getElementById("textdata").value.trim();
        if (tekstialue === "") { // onko tekstialue tyhjä
            alert("Jätit tekstikentän tyhjäksi.")
        }
    });
}
validateForm();

let laskuri = document.querySelector("#charcount2");
let nykyinenPituus = kentta.value.length;
let maxPituus = 100;
kentta.maxLength = maxPituus;

kentta.addEventListener('input', function () {
    nykyinenPituus = kentta.value.length;
    laskuri.innerHTML = `${nykyinenPituus}/${maxPituus}`;

    if (nykyinenPituus >= maxPituus) {
        kentta.style.color = "red";
        document.getElementById("send-button").disabled = true;
    }
    else {
        kentta.style.color = "initial";
        document.getElementById("send-button").disabled = false;
    }
});

// Harjoitus 4
const alue = document.querySelector("#coordinates");

alue.addEventListener('mousemove', function (event) {
    let x = event.clientX;
    let y = event.clientY;
    alue.textContent = `x: ${x}, y: ${y}`
});


// Bonus-tehtävä


