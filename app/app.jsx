import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from 'Main';
import Timer from 'Timer';
import Countdown from 'Countdown';

// Load foundation
import '!style!css!foundation-sites/dist/css/foundation.min.css';
$(document).foundation();

// App CSS
import '!style!css!sass!applicationStyles';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown}/>
      <IndexRoute component={Timer}/>      
    </Route>
  </Router>,
  document.getElementById('app')
);
