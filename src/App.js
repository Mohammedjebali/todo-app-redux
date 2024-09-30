
import './App.css';
import Taskform from './components/Taskform';
import 'bootstrap/dist/css/bootstrap.min.css';


import Tasklist from './components/Tasklist';

function App() {
  return (
    <div style={{textAlign:"center"}} className="App">
      <h1>Todo app</h1>
  <Taskform/>
      <Tasklist/>
    </div>
  );
}

export default App;
