

////////////////////////////////////README//////////////////////////////////////////////////////

// excute :  node Devoir.js "stic" file1.txt file2.txt file3.txt file4.txt
// le mot (stic) existe dans le fichier file1.txt et file3.txt
//le fichier file3.txt ne contient pas le mot
// le fichier file4.txt n'existe pas


const fichier = require('fs')
const procces = require('process')

place = process.argv[2]
 

var exists = true
var i = 3
while (exists) {
          if (procces.argv[i] != undefined) {
            cherche(procces.argv[i])
                    i++
          } else {
                    exists = false
          }
}


 function cherche(file){
          try {
                    const data = fichier.readFileSync(file , 'utf-8')
                    if(data){
                              var resultat = data.match(place)
                              if(resultat){
                    
                                        console.log('trouver dans le fichier : \" ' + file+' \"')
                              }
                    else{
                              console.log('NONE dans: \" ' + file+' \"')
                    }
                    }  
                    
          } catch (error) {
                    console.log(file + ": Ce fichier n'exsite pas")
          }
}



module.exports = {cherche}


