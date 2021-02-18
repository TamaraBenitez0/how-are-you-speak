
import { BrowserRouter , Switch, Route} from "react-router-dom";
import './App.css';
import PlayerVsMaquina from './PlayerVsMaquina';
import PlayerOneVsPlayerTwo from './PlayerOneVsPlayerTwo';
import Inicio from './Inicio'



const App=()=> {
return(
<BrowserRouter>  
  <Switch>
  <Route exact path="/" children={<Inicio/>} />
  <Route path="/oneplayer" component={PlayerVsMaquina} />
  <Route path="/twoplayers" component={PlayerOneVsPlayerTwo} />
  </Switch>
</BrowserRouter>

  );
}

export default App;
