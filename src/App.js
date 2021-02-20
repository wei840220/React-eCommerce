import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Homepage from "./pages/homepage/homepage.component";

const TopicsList = (props) => {
  return (
    <div>
      <h1>{ `${props.match.params.topics.toUpperCase()} PAGE` }</h1>
    </div>
  );
};

const TopicsDatail = (props) => {
  return (
    <div>
      <h1>{ `${props.match.params.topics.toUpperCase()} PAGE: ${props.match.params.topicId}` }</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route exact path='/:topics' component={TopicsList}></Route>
        <Route path='/:topics/:topicId' component={TopicsDatail}></Route>
      </Switch>
    </div>
  );
}

export default App;
