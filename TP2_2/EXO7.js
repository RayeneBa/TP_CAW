var outside = false ;
var cheat = false ;


window.onload = () => {
  var x = document.getElementsByClassName('boundary')
  for(var i =0; i<x.length ; i++ ){
    x[i].addEventListener('mouseover' , over)
  };
  document.getElementById('end').addEventListener('click' , end)
  document.getElementById('start').addEventListener('click' , start)
  document.getElementById('maze').addEventListener('mouseleave' , cheater)
}

function over() {
  outside= true;
  var x = document.getElementsByClassName('boundary');
  
    for(var i=0 ;i<x.length ; i++){
     x[i].style.background="red"; 

    }
   end()
}

function end(){
  if(outside){
    document.getElementById("status").innerHTML = "YOU LOSE" ;
  }else{
      document.getElementById("status").innerHTML = "Congrats ,YOU WIN" ;
    }
    if (cheat) {
      document.getElementById("status").innerHTML = "Don't cheat" ;
      var x = document.getElementsByClassName('boundary');
  
    for(var i=0 ;i<x.length ; i++){
     x[i].style.background="red"; 

    }
    }
  }

function start(){
  outside= false
  cheat = false
  var x = document.getElementsByClassName('boundary');
    for(var i=0 ;i<x.length ; i++){
     x[i].style.background="#eeeeee"; 
        }
              document.getElementById("status").innerHTML = "Again, Press the S" ;

}

function cheater(){
  
  cheat = true
  end()
}