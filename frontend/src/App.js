import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Listings from './containers/Listings';
import listingDetails from './containers/ListingDetails';
import Layout from './hocs/Layouts';
import NotFound from './components/NotFound';
import './sass/main.scss';

const App=()=>(
  <Router>
    <Layout>
      <Switch>
        <Route exact path ='/' component={Home}/>
        <Route exact path ='/about' component={About}/>
        <Route exact path ='/Conact' component={Contact}/>
        <Route exact path ='/listings' component={Listings}/>
        <Route exact path ='/listings/:id' component={listingDetails}/>
        <Route exact path ='/login' component={Login}/>
        <Route exact path ='/signup' component={SignUp}/>
        <Route component={NotFound}/>
      </Switch>
    </Layout>
  </Router>
);


export default App;
