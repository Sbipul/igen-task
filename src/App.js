import './App.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import Error from './pages/Error/Error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/details/:id">
            <ServiceDetails/>
          </Route>
          <Route path="*">
            <Error/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
