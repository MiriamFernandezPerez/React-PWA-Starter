import './App.css';
import {Escena, Botones} from './components/escena/Escena';
import {Story} from './data/Story';
import {useState} from 'react';
import {GlobalStyle} from './globalStyles';


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
  
  //Creo una variable para el mensaje de bienvenida con valor true
  let [Bienvenida, setBienvenida] = useState(true);

  const Entrar = () =>{
    setBienvenida(Bienvenida === true? Bienvenida = false : Bienvenida = true);
  }

  return (
    
    <div className="App">
    {Bienvenida && 
      <div className='container'>
        <div className='home'>
          <h1 className='p-4'>Un heroi molt "Espacial"</h1>
          <h3 className='mt-5 p-4'>Descubreix l'historia del nostre heroi en un mon tan divertit com ple de riscos</h3>
          <button type="button" className="btn btn-warning mt-4 p-4" onClick={Entrar}>Veure l'historia</button>
        </div>
      </div>
    }
    {!Bienvenida &&
    <div>
      <div>
      <GlobalStyle img={Story[contador].img}></GlobalStyle>
        <span onClick={Retroceso}><Botones textBtn="Anterior"></Botones></span>
        <span onClick={Avance}><Botones textBtn="Següent"></Botones></span>
      </div>
      <div>
        {Story.map((element) => (
          <Escena key={element.id} text={element.text} estado={element.estado}></Escena>
        ))}
      </div>
    </div>  
    }
      
    
    </div>
  );
}

export default App;



