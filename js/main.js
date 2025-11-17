document.querySelector("#Book").addEventListener("click", ClickInfoboxBook);
document.querySelector("#Laptop").addEventListener("click", ClickInfoboxLaptop);
document.querySelector("#Head").addEventListener("click", ClickInfoboxHead);
function ClickInfoboxBook() {
  document.querySelector("#Book").classList.add("darker");
  document.querySelector(".info-text h2").textContent = "Når alt online slettes";
  document.querySelector(".placeholder").innerHTML =
    "<p>Hvis en eller anden idiot sletter alt hvad du har liggende i skyen, for at tjene lidt ekstra, behøves du ikke at gå i panik - endnu!! Du skal blot finde din backup og overføre den til et USB stik - Du har en backup ik? R.I.P</p>";
  document.querySelector("#efficiency").innerHTML =
    "<h3>Gode idéer</h3><ul><li>Find backup på skrivebordet</li><li>Kopier til USB eller skriv i hånden</li><li>Tjek din gamle harddisk</li><li>Græd stille - ingen dramatik</li><li>Tweet om katastrofen</li></ul>";
  document.querySelector("#requirement").innerHTML =
    "<h3>Dårlige idéer</h3><ul><li>Smadre skærmen i vrede</li><li>Ringe og kræve første fødte</li><li>Prøv at hacke dig tilbage</li><li>Opgrader internetforbindelsen</li><li>Ignorer det og håb på mirakler</li></ul>";

  document.querySelector("#Laptop").classList.remove("darker");
  document.querySelector("#Head").classList.remove("darker");
}
function ClickInfoboxLaptop() {
  document.querySelector("#Laptop").classList.add("darker");
  document.querySelector(".info-text h2").textContent = "Når internettet slukkes";
  document.querySelector(".placeholder").innerHTML =
    "<p>En guide til hvad du gør når internettet slukkes, skrevet i punktform, så du nemmere kan finde ud af hvad du skal gøre - for lade os være ærlig - der findes intet værre end intet internet:</p>";
  document.querySelector("#efficiency").innerHTML =
    "<h3>Gode idéer</h3><ul><li>Genstart routeren (det virker 90% af tiden… måske)</li><li>Tjek om kablerne faktisk sidder i</li><li>Spørg resten af huset om nettet også er dødt</li><li>Brug mobildata som nødløsning</li><li>Tag en pause og lad som om det var planlagt</li></ul>";
  document.querySelector("#requirement").innerHTML =
    "<h3>Dårlige idéer</h3><ul><li>Stirre vredt på routeren som om den forstår dig</li><li>Trække alle kabler ud i panik</li><li>Skylde problemet på naboen, katten eller universet</li><li>Trykke F5 300 gange i håbet om et mirakel</li><li>Ringe til udbyderen efter 30 sekunder uden internet</li></ul>";
  document.querySelector("#Book").classList.remove("darker");
  document.querySelector("#Head").classList.remove("darker");
}
function ClickInfoboxHead() {
  document.querySelector("#Head").classList.add("darker");
  document.querySelector(".info-text h2").textContent = "Når hackeren angriber";
  document.querySelector(".placeholder").innerHTML =
    "<p>Han startede bare med at lege lidt med kode og forskellige test af “passwords”. Nu er han pludselig hardcore hacker, og du er fanget i stormen. Men bare rolig - her finder du lidt tips til at komme ud af det:</p>";
  document.querySelector("#efficiency").innerHTML =
    "<h3>Gode idéer</h3><ul><li>Skift Wi-Fi-navnet et par gange bare for at forvirre hackeren</li><li>Træk stikket til computeren ud og tag en eksistentiel pause</li><li>Sluk og tænd routeren som et digitalt renselsesritual</li><li>Send en høflig mail til hackeren (efter routeren er tændt igen)</li></ul>";
  document.querySelector("#requirement").innerHTML =
    "<h3>Dårlige idéer</h3><ul><li>Panikke og råbe “HAN ER INDE I SYSTEMET!”</li><li>Trække alle kabler ud uden at ane hvor de skulle sidde</li><li>Give katten skylden for cybersikkerhedsbruddet</li><li>Forsøge at “over-hacke” hackeren med Google som våben</li><li>Græde dramatisk i hjørnet (medmindre du har brug for det)</li></ul>";
  document.querySelector("#Book").classList.remove("darker");
  document.querySelector("#Laptop").classList.remove("darker");
}

document.querySelector("#Book").addEventListener("mouseenter", HoverInBook);
document.querySelector("#Laptop").addEventListener("mouseenter", HoverInLaptop);
document.querySelector("#Head").addEventListener("mouseenter", HoverInHead);
document.querySelector("#Book").addEventListener("mouseleave", HoverOutBook);
document.querySelector("#Laptop").addEventListener("mouseleave", HoverOutLaptop);
document.querySelector("#Head").addEventListener("mouseleave", HoverOutHead);
function HoverInBook() {
  document.querySelector("#Book").classList.add("brighter");
}
function HoverInLaptop() {
  document.querySelector("#Laptop").classList.add("brighter");
}
function HoverInHead() {
  document.querySelector("#Head").classList.add("brighter");
}
function HoverOutBook() {
  document.querySelector("#Book").classList.remove("brighter");
}
function HoverOutLaptop() {
  document.querySelector("#Laptop").classList.remove("brighter");
}
function HoverOutHead() {
  document.querySelector("#Head").classList.remove("brighter");
}
