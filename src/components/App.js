import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Board from '../pages/Board'
import Programs from '../pages/Programs';
import Resources from '../pages/Resources';
import Join from '../pages/Join';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/board" component={Board} />
          <Route path="/programs" component={Programs} />
          <Route path="/resources" component={Resources} />
          <Route path="/join" component={Join} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
