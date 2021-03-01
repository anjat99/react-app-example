import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="http://anjat99.github.io/react-app-example/" exact  component={Home} />
          <Route path="http://anjat99.github.io/react-app-example/services"   component={Services} />
          <Route path="http://anjat99.github.io/react-app-example/products"   component={Products} />
          <Route path="http://anjat99.github.io/react-app-example/sign-up"   component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
