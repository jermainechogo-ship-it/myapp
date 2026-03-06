import logo from './logo.svg';
import './App.css';
import Firstcomponent from './components/Firtcomponont';
import secondcomponent from './components/Secondcomponent';
import Thirdcomponent from './components/Thirdcomponent';
import Forthcomponent from './components/Forthcomponent';
import Fifthcomponent from './components/Fifthcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WECOLME TO LEARNING REACT.JS</h1>
        <h2>react is fun</h2>
        
       </header>
        {/* {below we render/display our component } */}

        <Firstcomponent/>
        <Thirdcomponent/>
        <Forthcomponent/>
        <Fifthcomponent/>

       
    </div>
  );
}

export default App;

// JSX 