import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/about" component={ About } /> 
      </Switch>
    </div>
  );
}

export default App;
