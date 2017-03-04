import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from 'Main';
import Stopwatch from 'Stopwatch';
import Timer from 'Timer';

// Load foundation
$(document).foundation();

// App CSS
import '!style!css!sass!applicationStyles';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="timer" component={Timer} />
      <IndexRoute component={Stopwatch} />      
    </Route>
  </Router>,
  document.getElementById('app')
);
