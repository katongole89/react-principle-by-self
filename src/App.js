import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import SearchableDropdown from './pages/SearchableDropDown';
import SimpleToDo from './pages/simpleToDo'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <Router>
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/searchable-dropdown' component={SearchableDropdown} />
          <Route path='/simple-to-do' component={SimpleToDo} />
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