
/* ======= Projekt - Schere/Stein/Papier ===== */


/* Zunächst die Info_Ausgabe über Html Elelemnte anbinden */
const deineWahlDisplay = document.getElementById("deineWahl")
const komputerDisplay = document.getElementById("komputer")
const ergebnisDisplay = document.getElementById("ergebnis")

//die Auswahl über die drei Buttons verknüpfen
const deineAuswahl = document.querySelectorAll('button')


//Funktion, über die ich die Ergebnisse anzeige
deineAuswahl.forEach(möglicheAuswahl => möglicheAuswahl.addEventListener('click', (event) => {
    deineWahl = event.target.value
    deineWahlDisplay.innerHTML = deineWahl
    komputerEntscheidung()
   dasErgebnis() 
  }))

//let x = (Math.random()*3).toFixed(0)
//let x = Math.floor(Math.random()*3)+1;
//console.log(x) 


//Zufallsgenerator des Komputers mit entsprechender Ausgabe
function komputerEntscheidung() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 
    
    if (randomNumber === 1) {
      komputerAuswahl = "Schere"
    }
    if (randomNumber === 2) {
      komputerAuswahl = "Stein"
    }
    if (randomNumber === 3) {
      komputerAuswahl = "Papier"
    }
    komputerDisplay.innerHTML = komputerAuswahl
  } 

  // Else If Abfrage über die möglichen Ausgänge des Spiels
  //ergebnis wieterleiten
  function dasErgebnis() {
    if (komputerAuswahl === deineWahl) {
      ergebnis = "unentschieden"
    }
    if (komputerAuswahl === "Stein" && deineWahl === "Papier") {
        ergebnis = "gewonnen"
      }
    if (komputerAuswahl === "Stein" && deineWahl === "Schere") {
        ergebnis = "verloren"
    }
    if (komputerAuswahl === "Papier" && deineWahl === "Stein") {
        ergebnis = "gewonnen"
    }
    if (komputerAuswahl === "Papier" && deineWahl === "Schere"){
        ergebnis = "verloren"
    }
    if ( komputerAuswahl=== "Schere" && deineWahl === "Stein") {
        ergebnis = "gewonnen"
    }
    if (komputerAuswahl === "Schere" && deineWahl === "Papier") {
        ergebnis = "verloren"
    }
    ergebnisDisplay.innerHTML = ergebnis
}

/// TO DO
// To do - das Spiel auf 5 Runden begrenzen   
// Zwischenergebnisse - Zwischenstand anzeigen lassen
//Styling
