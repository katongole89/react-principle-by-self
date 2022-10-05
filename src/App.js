import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import SearchableDropdown from './pages/SearchableDropDown';
import SimpleToDo from './pages/simpleToDo'
import HomePage from './pages/HomePage'
import Hooks from './pages/Hooks/index,jsx';
import TestRecaptcha from './pages/Recaptcha';
// import NeededComponent from './pages/SimpleComponents/index.js';
import FunkComponent from './pages/FunkComponents/index,js';
import TestUseRefHook from './pages/TestUseRefHook';
import EventListeners from './pages/EventListenersUseffect/index.js';
import FetchingData from './pages/FetchingData';
import FormsComponent from './pages/Forms';
import CustomHooks from './pages/CustomHooks';
import PropTypesComponent from './pages/PropTypes';
import TestRegularFetchCustomHook from './pages/Challenge23';
import Challenge1 from './pages/Challenge1';
import Challenge2 from './pages/Challenge2';
import Challenge3 from './pages/Challenge3';
import Challenge4 from './pages/Challenge4';
import TestingContextApi from './pages/ContextApi';
import Challenge5 from './pages/Challenge5';
import Challenge6 from './pages/Challenge6';
import Challenge7 from './pages/Challenge7';
import Challenge16 from './pages/Challenge16';
import Challenge18 from './pages/Challenge18';
import SimpleModal from './pages/SimpleModal';


const App = () => {
  return (
    <Router>
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/searchable-dropdown' component={SearchableDropdown} />
          <Route path='/simple-to-do' component={SimpleToDo} />
          <Route path='/hooks' component={Hooks} />
          <Route path='/recapture' component={TestRecaptcha} />
          <Route path='/funk-component' component={FunkComponent} />
          <Route path='/test-use-ref' component={TestUseRefHook} />
          <Route path='/event-listeners' component={EventListeners} />
          <Route path='/fetching-data' component={FetchingData} />
          <Route path='/forms' component={FormsComponent} />
          <Route path='/custom-hooks' component={CustomHooks} />
          <Route path='/prop-types' component={PropTypesComponent} />
          <Route path='/challenge-23' component={TestRegularFetchCustomHook} />
          <Route path='/challenge-1' component={Challenge1} />
          <Route path='/challenge-2' component={Challenge2} />
          <Route path='/challenge-3' component={Challenge3} />
          <Route path='/challenge-4' component={Challenge4} />
          <Route path='/challenge-5' component={Challenge5} />
          <Route path='/challenge-6' component={Challenge6} />
          <Route path='/challenge-7' component={Challenge7} />
          <Route path='/challenge-16' component={Challenge16} />
          <Route path='/challenge-18' component={Challenge18} />
          <Route path='/testing-context-api' component={TestingContextApi} />
          <Route path='/simple-modal' component={SimpleModal} />


      </Switch>
    </Router>
  );
}

export default App;





// import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';

// class App extends Component {
//   render() {
//     return (
//     <Router>
//         <div>
//           <h2>Welcome to React Router Tutorial</h2>
//           <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <ul className="navbar-nav mr-auto">
//             <li><Link to={'/'} className="nav-link"> Home </Link></li>
//             <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
//             <li><Link to={'/about'} className="nav-link">About</Link></li>
//           </ul>
//           </nav>
//           <hr />
//           <Switch>
//               <Route exact path='/' component={Home} />
//               <Route path='/contact' component={Contact} />
//               <Route path='/about' component={About} />
//           </Switch>
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;