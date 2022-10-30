import './App.css';
import {Escena} from './components/escena/Escena';
import {Story} from './data/Story';

function App() {
  return (
    <div className="App">
      {Story.map((element) => (
          <Escena key={element.id} text={element.text} />
        ))}
    </div>
  );
}

export default App;