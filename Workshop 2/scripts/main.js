// Harjoitusten sisältöä voidaan testailla ottamalla multiline-kommentit pois päältä ("/*" ja "*/") ko. harjoitus-blockin kohdalla.

// Harjoitus 1:
/*
document.write(`<b><i>Jos minulla olisi yhdeksän tuntia puun kaatamiseen, käyttäisin ensimmäiset kuusi kirveen terottamiseen.</b><br>
– Abraham Lincoln</i>`);
*/

// Harjoitus 2:
/*
let string = "sana";
var toistoMaara = prompt("Kuinka monta riviä tulisi tulostaa?")

function repeatingText(toistoMaara) {
    for (var i = 0; i < toistoMaara; i++) {
        document.write(`${string}<br>`);
    }
}
repeatingText(toistoMaara);
*/

// Harjoitus 3:
/*
function detectBrowser() {
    const browserDetails = navigator.userAgent;

    if (browserDetails.includes("Firefox")) {
        alert("You are using Firefox, redirecting you...");
        window.location.href = "https://www.mozilla.org";
    }
    else {
        window.location.href = "https://www.is.fi";
    }
}
detectBrowser();
*/

// Harjoitus 4:
/*
Löytyy omasta hakemistostaan "Harjoitus 4"
*/

// Harjoitus 5:
/*
const images = [
    "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
    "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
    "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
  ];

function randomImage() {
    index = Math.floor(Math.random() * images.length);
    document.write('<img src=' + images[index] + '>');
}
randomImage();
*/
