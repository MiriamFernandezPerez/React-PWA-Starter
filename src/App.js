import './App.css';
import {Escena, Botones} from './components/escena/Escena';
import {Story} from './data/Story';
import {useState} from 'react';


function App() {

  //Uso un contador para cambiar el estado
  const [contador, setContador] = useState(0); 

  const Avance = () => {
    //Reinicio el className cada vez que se haga onclick para no acumular frases con el mismo background
    Story[contador].estado = '';
    //Desabilito el botón si es mayor que la longitud del objeto Story
    if (contador <3){
      setContador(contador +1);
    }
    
  }
  const Retroceso = () => {
    Story[contador].estado = '';
    //Desabilito el botón si es menor que la longitud del objeto Story
    if (contador >0){
      setContador(contador -1);
    }
  }

  //Si el contador es igual al id-1 cambio la className para cambiar el color
  if(contador == Story[contador].id-1){
    Story[contador].estado = 'activo';
  }
        
  
  return (
    
    <div className="App">
      <div>
        <span onClick={Retroceso}><Botones textBtn="Anterior"></Botones></span>
        <span onClick={Avance}><Botones textBtn="Següent"></Botones></span>
      </div>
      {Story.map((element) => (
          <Escena key={element.id} text={element.text} estado={element.estado}></Escena>
        ))}
    </div>
  );
}

export default App;