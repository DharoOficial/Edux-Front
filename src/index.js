import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from '../src/components/pages/home/index';
import Login from '../src/components/pages/login/index';
import PostDica from '../src/components/pages/postDica/index';
import Cadastro from '../src/components/pages/cadastrar/index';
import MainProfessor from '../src/components/pages/mainProfessor/index';
import MainUsuario from '../src/components/pages/mainUsuario/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dicas from './components/pages/dicas';


const routing = ( 
  <Router>
    <div>
        <Switch>
          <Route exact path ='/' component={Home}/>
          <Route path ='/cadastrar' component={Cadastro}/>
          <Route path ='/login' component={Login}/>
          <Route path ='/dicas' component={Dicas}/>
          <Route path ='/postDica' component={PostDica}/>
          <Route path ='/mainProfessor' component={MainProfessor}/>
          <Route path ='/mainUsuario' component={MainUsuario}/>
        </Switch>
    </div>
  </Router>
)


ReactDOM.render(
  routing ,
  document.getElementById('root')
);

reportWebVitals();
