import React from  'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

const App = () =>(
    <Router> 
      <Layout>
       <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route component= {NotFound} ></Route>
      </Switch>
     </Layout>
    </Router>
);

export default App;

