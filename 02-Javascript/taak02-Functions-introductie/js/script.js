ZelfverzonnenNaam();
PromptNaam();
ZekerBericht();
function ZelfverzonnenNaam(){
 ZelfverzonnenNaam = alert("Hallo, Welkom!");
}
function PromptNaam(){
  promptNaamVar = prompt("Wat is je naam?");   
}
function ZekerBericht(){
    resultaat=confirm("Weet u het zeker?");
    if(resultaat == true){
        console.log(promptNaamVar);
    }
}



