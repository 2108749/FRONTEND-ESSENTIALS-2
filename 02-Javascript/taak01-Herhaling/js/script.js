let strNaam;
let boolNaamKlopt;
strNaam = prompt("Hoe heet jij?")
boolNaamKlopt = confirm("Heet je echt " + strNaam);
if(boolNaamKlopt == true){
    alert("Welkom!");
}
else{
    strNaam = prompt("Nog een keer.. Hoe heet jij?");
    boolNaamKlopt = confirm("Heet je echt " + strNaam);
}
if(boolNaamKlopt == true){
    alert("hoi")

}
else{
    alert("alsnog welkom")
}
