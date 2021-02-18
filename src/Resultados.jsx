import { useEffect, useState } from 'react';
import './css/Resultados.css'
import piedra from './images/piedra.png'
import papel from './images/papel.png'
import tijera from './images/tijera.png'
import lagarto from './images/lagarto.png'
import spock from './images/spock.png'
import trofeo from './images/trofeo.png'


const Resultados = ({player1,player2,nuevaPartida,sumarScore}) => {

const [ganador,setGanador]=useState("")

useEffect(() => {
setGanador(playerGanador())
  sumarScore(ganador)
},[ganador])  


const mostrarGanador = (player) => {

    if(player=== "Empate"){
        return (<h1 className="col-sm-12">Empate</h1>)
    }
    else{
    return(<h1 className="col-sm-12">{`Ganador : ${player}`}</h1> )
    }
}

const player1GanaPorPiedra = () => {

    return ((player1==="piedra") &&((player2==="tijera") ||(player2==="lagarto")))

}

const player1GanaPorTijera = () => {

    return ((player1==="tijera")&&((player2==="lagarto")||(player2==="papel")))
}

const player1GanaPorPapel = () => {

    return ((player1==="papel")&&((player2==="spock")||(player2==="piedra"))) 
}

const player1GanaPorSpock = () => {

    return ( (player1==="spock")&&((player2==="tijera")||(player2==="Piedra")))
}

const player1GanaPorLagarto = () => {

    return ( (player1==="lagarto")&&((player2==="spock")||(player2==="papel")) ) 

}



const playerGanador = () => {

    let ganador;
    if (player1===player2) {

       sumarScore('')
        return ("Empate")
    } else if (player1GanaPorPiedra()){

            ganador = "Player 1"
            
    } else if (player1GanaPorTijera()) {

        ganador = "Player 1"

    } else if(player1GanaPorPapel()) {

        ganador = "Player 1"
    } else if (player1GanaPorSpock()) {

        ganador = "Player 1"
    } else if (player1GanaPorLagarto()) {

        ganador = "Player 1"
    }
    else {

        ganador = "Player 2"
    }
	
    return ganador
}




const imagen1= <img src={
    player1 === "piedra" ? piedra :
    player1 === "papel" ? papel :
    player1 === "tijera" ? tijera  :
    player1 === "lagarto" ? lagarto : spock 
    } alt= {player1}></img>


    const imagen2= <img src={
        player2 === "piedra" ? piedra :
        player2 === "papel" ? papel :
        player2 === "tijera" ? tijera  :
        player2 === "lagarto" ? lagarto : spock 
        } alt= {player2}></img>

return (
    <div className="background ">
    <div className="resultados container-fluid">
      <div className="row h1-res">
        <h1 className="col-sm-12">Resultados</h1>
      </div>
      <div className="d-flex row imagenes-container">
          <div className="eleccion"> Player 1 ha elegido
          <figure>
        <div className="col-sm-6 img1"> {imagen1}</div>
        <figcaption>{player1}</figcaption>
        </figure>
        </div>    
        <div className="eleccion">
            Player 2 ha elegido
            <figure>
        <div className="col-sm-6 img2">{imagen2}</div>
        <figcaption>{player2}</figcaption>
        </figure>
      </div>
      </div>
      <div className="row div-ganador">
     <img src= {trofeo} id="trofeo"></img>    {mostrarGanador(playerGanador())}
      </div>
      <div className="row div-button">
        <button type="button" className="btn btn-dark col-sm-12" onClick={nuevaPartida} >Jugar otra vez</button>
      </div>
    </div>    
</div>


)

}

export default Resultados;