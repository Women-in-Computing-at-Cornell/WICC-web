import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Board from '../pages/Board';
import Programs from '../pages/Programs';
//import Resources from '../pages/Resources';
import Campaigns from '../pages/programs/Campaigns';
import Discussions from '../pages/programs/Discussions';
import Events from '../pages/programs/Events';
import Lunch from '../pages/programs/Lunch';
import Membership from '../pages/programs/Membership';
import Mentorship from '../pages/programs/Mentorship';
import Outreach from '../pages/programs/Outreach';
import Prospective from '../pages/programs/Prospective';
import Calendar from '../pages/Calendar';
import CrackingYourCareer from '../pages/programs/CrackingYourCareer';


import Join from '../pages/Join';
import Footer from './Footer';

function App() {

  return (
    <HashRouter>
      <div style={{ fontFamily: 'Inter' }}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/board" component={Board} />
          <Route path="/programs" component={Programs} />
          <Route path="/join" component={Join} />
          <Route path="/membership" component={Membership} />
          <Route path="/campaigns" component={Campaigns} />
          <Route path="/discussions" component={Discussions} />
          <Route path="/crackingyourcareer" component={CrackingYourCareer} />
          <Route path="/events" component={Events} />
          <Route path="/lunch" component={Lunch} />
          <Route path="/mentorship" component={Mentorship} />
          <Route path="/outreach" component={Outreach} />
          <Route path="/prospective" component={Prospective} />
          <Route path="/calendar" component={Calendar} />
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
}
//          <Route path="/resources" component={Resources} />


export default App;
