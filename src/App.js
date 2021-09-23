import Home from './Home';
import Detail from './Detail';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <header className="">
      </header>
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/detail" component={Detail}/>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
