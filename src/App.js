import logo from './logo.svg';
import './App.css';
import Increment from './Component/Increment';
import Decrement from './Component/Decrement';

function App() {
  return (
    <div className="App">
      <Increment />
      <Decrement />
    </div>
  );
}

export default App;
