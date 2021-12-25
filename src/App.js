import Home from "./components/home"
import './App.css';
import Navbar from "./components/navbar";
import About from "./components/about";
import Skills from "./components/skills"
import {Switch , Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
       <Switch>
         <Route path='/skills' component={Skills}/>
         <Route path='/about' component={About}/>
       </Switch>
    </div>
  );
}

export default App;

