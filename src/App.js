import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Presentation from './components/Presentation';
import NavBar from './layout/navBar'
import IniciaSesion from './components/IniciaSesion'
import Nosotros from './components/Nosotros'
import Dashboard from './components/dashboard';
import Registrar from './components/Registrar';
import NegocioDetail from './layout/NegocioDetail';

class App extends Component {
  render() {
    
    return (
      <BrowserRouter>
        
        <div className="App">
        <NavBar></NavBar>
        <Switch>
        <Route path='/negocioDetail/:id' component={NegocioDetail} />
         <Route exact path='/' component={Presentation} ></Route>
         <Route path='/sesion' component={IniciaSesion} ></Route>
         <Route path='/nosotros' component={Nosotros} ></Route>
         <Route path='/register' component={Registrar} ></Route>
         <Route path='/dashboard' component={Dashboard} ></Route>
        </Switch>
      
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
