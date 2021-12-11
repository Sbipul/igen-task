import logo from './logo.svg';
import './App.css';
import Header from './shared/Header.js/Header';
import Home from './pages/Home/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
        
        
    </div>
  );
}

export default App;
