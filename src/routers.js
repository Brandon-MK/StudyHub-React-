import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import App from "./App";
import Timetable from "./timetable";
import "bootstrap/dist/css/bootstrap.min.css";
import Note from "./Note";
import Cal from "./calculator";

const Routers = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="/">
          StudyHub
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/Calculator">
                Calculator
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="./timetable">
                Timetable
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./Note">
                Notes
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Reminders
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Academic Records
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/timetable" component={Timetable} />
        <Route path="/Note" component={Note} />
        <Route path="/Calculator" component={Cal} />
      </Switch>
    </div>
  );
};

export default Routers;
