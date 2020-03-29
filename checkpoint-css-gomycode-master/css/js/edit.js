var getText = document.getElementById("mytext");
var selectSize=document.getElementById("size");
var selectPolice=document.getElementById("police");

  
  function changeSize()
  {
    getText.style.fontSize=selectSize.value
}
//change size
function changePolice()
{
    getText.style.fontFamily=selectPolice.value
}
//change police
function bold()
  {
   
    if(getText.style.fontWeight=="bold")
    { console.log("valider")
        getText.style.fontWeight="normal"
    }
    else
    {
        getText.style.fontWeight="bold"
        console.log("valider")
    }
  }
  //change fontWeight
  function italique()
  {
    if(getText.style.fontStyle=="italic")
    {
        getText.style.fontStyle="normal"
    }
    else
    {
        getText.style.fontStyle="italic"
    }
      //change fontstyle
  }
  function souligne()
  {
  
    if(getText.style.textDecoration=="underline")
    {
        getText.style.textDecoration=""
    }
    else
    {
        getText.style.textDecoration="underline"
    }
  }
  //change textDecoration

