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

    if(boolNaamKlopt == true){
    alert("doei")

    }
    else{
    alert("alsnog welkom")
    }
}
