const getcolor = () =>{
 //Hex Code
 const RandomNumber = Math.floor(Math.random()*16777215);
 const randomcode = '#'+ RandomNumber.toString(16);
 document.body.style.background = randomcode ;
 document.getElementById('color-code').innerHTML = randomcode;

 navigator.clipboard.writeText(randomcode);
}

//eventcall
document.getElementById('btn').addEventListener('click',getcolor)

//initial call
getcolor();
