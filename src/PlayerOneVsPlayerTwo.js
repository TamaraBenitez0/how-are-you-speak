import { useEffect, useState } from 'react';
import './css/bootstrap.min.css';
import Resultados from './Resultados'
import './css/App.css';
import cruzado from './images/cruzado.png'
import score from './images/score.png'
import signo from './images/signo.png'
import { useHistory } from 'react-router-dom';


const PlayerOneVsPlayerTwo = () =>{

const [eleccionPlayer,setEleccionPlayer] = useState("signo");
const [eleccionPlayerTwo,setEleccionPlayerTwo] = useState ("signo");
const [resultado,setResultado] = useState(false)
const [puedeVerResultado,setPuedeVerResultado] = useState (true)
const [scorePlayer1,setScorePlayer1] = useState(0)
const [scorePlayer2,setScorePlayer2] = useState(0)
const [eligioPone,setEligioPone] = useState(false)
const [eligioPTwo,setEligioPtwo] = useState(false)


const history= useHistory();


const seleccionPlayer=(tipoEleccion) => (event) =>{

  event.preventDefault();
  setEleccionPlayer(tipoEleccion)
  setEligioPone(true)
  setPuedeVerResultado(false)
 

}

const seleccionPlayerTwo = (tipoEleccion) => (event) => {
    event.preventDefault();
    setEligioPtwo(true)
    setEleccionPlayerTwo(tipoEleccion)
    setPuedeVerResultado(false)
   

}

const handleResultado = (event) => {
  event.preventDefault();
  if(eligioPone && eligioPTwo){
  setResultado(true)
  setPuedeVerResultado(false)
  }
  else{

    setPuedeVerResultado(true)
  }
}

const nuevaPartida = (event) => {
  event.preventDefault();
  setResultado(false)
  setPuedeVerResultado(true)
  setEligioPtwo(false)
  setEligioPone(false)

 


}

const sumarScore = (player) => {

   

 

  if(player === "Player 1"){
	console.log("ejecute")
    setScorePlayer1(scorePlayer1+1)
     
  }
  else if (player === "Player 2") {
		console.log("ejecute2")
       setScorePlayer2(scorePlayer2+1)
  }

}

const volver =(event) => {

  event.preventDefault();
  history.push("/")

}

return(
  
  <div className="container-fluid" id="principal2">  
   <button type="button" class="btn btn-primary" id="volver" onClick={volver}>Volver al inicio</button>

  <div class="row">
  <div class="col-sm-6" id="col-player">
   
    <div class="card" id="cardOne">
     
    <div class="card-header" >
   <img src={cruzado} id="cruzado" ALIGN="left"></img> Player 1 <div id="textScore" >Score</div>
<img src={score} id="score"  ></img> <div id="numero">{scorePlayer1}</div></div> 
<h5 class="card-title">{eligioPone && <h1 id="seleccion">Eleccion cargada</h1>}</h5>
      <div class="card-body">
      <img src={`../../signo.png`}></img>

     
    
      <div class="btn-group dropright" >
  <button type="button" id="DropOne"class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Haz tu eleccion!
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <button class="dropdown-item"  onClick={seleccionPlayer("piedra")}>Piedra</button>
    <button class="dropdown-item"  onClick={seleccionPlayer("papel")}>Papel</button>
    <button class="dropdown-item" onClick={seleccionPlayer("tijera")}>Tijera</button>
    <button class="dropdown-item"  onClick={seleccionPlayer("lagarto")}>Lagarto</button>
    <button class="dropdown-item"  onClick={seleccionPlayer("spock")}>Spock</button>
   
   
    
</div>
      </div>
    
     
    </div>
  </div>
  </div>
  <div class="col-sm-6" id="col-player">
  
    <div class="card" id="cardTwo">
    <div class="card-header">
    <img src={cruzado} id="cruzado" ALIGN="left"></img> Player 2  <div id="textScore" >Score</div>
<img src={score} id="score"  ></img> <div id="numero">{scorePlayer2}</div>
  </div>
  <h5 class="card-title">{eligioPTwo && <h1 id="seleccion">Eleccion cargada</h1>}</h5>
      <div class="card-body">
      <img src={`../../signo.png`}></img>
      <br></br>
      <br></br>
      
      
      <div class="btn-group dropright" >
  <button type="button" id="dropTwo" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Haz tu eleccion!
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <button class="dropdown-item" onClick={seleccionPlayerTwo("piedra")}>Piedra</button>
    <button class="dropdown-item" onClick={seleccionPlayerTwo("papel")}>Papel</button>
    <button class="dropdown-item" onClick={seleccionPlayerTwo("tijera")} >Tijera</button>
    <button class="dropdown-item" onClick={seleccionPlayerTwo("lagarto")}>Lagarto</button>
    <button class="dropdown-item" onClick={seleccionPlayerTwo("spock")}>Spock</button>
      
      </div>
    </div>
    
  </div>

  
</div>

  <br></br>
<div ALIGN="center" className="botonTwo">
<button type="button" class="btn btn-outline-secondary" id="jugarTwo" disabled={puedeVerResultado} onClick= {handleResultado}>Jugar</button>

</div>


{resultado && <Resultados player1={eleccionPlayer} player2={eleccionPlayerTwo} nuevaPartida={nuevaPartida} sumarScore= {sumarScore} />}
 </div>
 
  </div>
  </div>

)


}

export default PlayerOneVsPlayerTwo ;