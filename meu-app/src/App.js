import './App.css';
import Welcome from './components/welcome';
import Reverse from './components/reverse';
import TodoList from './TodoList/Todolist';

function App() {
  return (
    <div className="App">
       <Welcome className="Name" nome="Cleiton" sobrenome="Guilherme"/>
       <div className="reverse">
          <p className="app-text">Os Textos abaixo são criados pelo componente Reverse</p>
       <Reverse>
            meu texto
       </Reverse>
       <Reverse>
           meu texto deve ser invertido
       </Reverse>
       </div>
       <TodoList/>
    </div>
  );
}

export default App;
