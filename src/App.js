import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Nav from './components/Nav.js';
import Homepage from './components/Homepage.js';

function App() {
  let links = [
    {displayName: 'Home', url: '/'},
    {displayName: 'About', url: '/about'},
    {displayName: 'Contact', url: '/contact'}
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <Nav links={links} />
          <Route path='/' exact>
            <Homepage>
              <p>I am a test</p>
              <p>Hellooooooo</p>
            </Homepage>
          </Route>
          <Route path='/about' exact><h3>About</h3></Route>
          <Route path='/contact' exact><h3>Contact</h3></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
