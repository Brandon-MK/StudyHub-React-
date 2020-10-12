import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import App from "./App";
import Timetable from "./timetable";
import "bootstrap/dist/css/bootstrap.min.css";

const Routers = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Student
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
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Math Formula
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="./timetable">
                Timetable
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Helpers
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item bold" href="#">
                  Notes
                </a>
                <a class="dropdown-item" href="#">
                  Academic Record
                </a>

                <a class="dropdown-item" href="#">
                  Reminder
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/timetable" component={Timetable} />
      </Switch>
    </div>
  );
};

export default Routers;
