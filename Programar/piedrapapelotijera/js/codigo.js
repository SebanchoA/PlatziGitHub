function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
  }
  function eleccion(jugada){
    let restultado = ""
      if(jugada == 1){
        restultado = "Piedra"
      }
      else if(jugada == 2){
        restultado = "Papel"
      }
      else if(jugada == 3){
        restultado = "Tijera"
      }
      else {
        restultado = "Mal elegido"
      }
      return restultado
    }
  
  
  let jugador = 0
  let pc = 0
  let triunfos = 0
  let perdidas = 0

  while (triunfos < 3 && perdidas < 3){

      pc = aleatorio(1,3)
      jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para piedra")
      
      alert("PC elige: " + eleccion(pc))
      alert("tu eliges: " + eleccion(jugador))
      
      if(jugador == pc){
        alert("Empate")
      }
      else if((jugador == 1 && pc == 3) || (jugador == 3 && pc == 2) || (jugador == 2 && pc == 1)
      ){
        alert("You WIN")
        triunfos++
      }
      else{
        alert("You lose")
        perdidas++
      }
      
  }
  
  alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.")
