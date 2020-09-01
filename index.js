
var x=document.querySelectorAll(".animal").length;
console.log(x);
for (var i=0;i<x;i++)
{    
document.querySelectorAll(".animal")[i].addEventListener("click",function (){
console.log(this.innerHTML);
switch(this.innerHTML)
{ case "C": var audio= new Audio('./sound/sound1.mp3');
           audio.play();
           console.log(this.innerHTML);
           break;
  case "E": var audio= new Audio('./sound/sound2.mp3');
           audio.play();
           console.log(this.innerHTML);
           break;
  case "L": var audio= new Audio('./sound/sound3.mp3');
           audio.play();
           console.log(this.innerHTML);
           break;
  case "P": var audio= new Audio('./sound/sound4.mp3');
           audio.play();
           console.log(this.innerHTML);
           break;
  case "W": var audio= new Audio('./sound/sound5.mp3');
           audio.play();
           console.log(this.innerHTML);
           break;
}

} )
}

