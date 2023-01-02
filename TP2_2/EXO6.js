window.onload = () => {
  var x = document.getElementsByClassName('boundary')
   for(var i =0; i<x.length ; i++ ){
     x[i].addEventListener('mouseover' , () =>{
        for(var j=0 ;j<x.length ; j++){
        x[j].style.background="red";
        
       }
 document.getElementById("status").innerHTML = "YOU LOSE" ;
})}
   document.getElementById('end').addEventListener('mouseover' , () =>{
 document.getElementById("status").innerHTML = "YOU WIN" ;
    } )




document.getElementById('start').addEventListener('mouseover' , () =>{
      var x = document.getElementsByClassName('boundary')
     for(var i=0 ;i<x.length ; i++){
        x[i].style.background="#eeeeee";
     }

   } )


}
 

