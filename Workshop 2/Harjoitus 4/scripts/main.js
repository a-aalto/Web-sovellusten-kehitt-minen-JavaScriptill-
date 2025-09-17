function isStudent() {
    if (confirm("Oletko opiskelija?")) {
        let nimi = prompt("Mikä on nimesi?");

        if (nimi != null) {
            document.getElementById("textHere").innerHTML = "Tervetuloa, " + nimi + " (opiskelija)!";
        }
    }
    else {
        document.getElementById("textHere").innerHTML = "Valitettavasti tämä sivu on tarkoitettu vain opiskelijoille"
    }

}