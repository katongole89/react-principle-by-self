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
import EventListeners from './pages/EventListenersUseffect/index,js';


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