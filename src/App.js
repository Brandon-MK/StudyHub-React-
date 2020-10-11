import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
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
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Math Formula
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
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
      <div class="jumbotron">
        <h1 class="display-4">Welcome!</h1>
        <p class="lead">
          This is a simple student assistant that helps you keep track of your
          academics, take notes, calaulate formulas and many more.
        </p>
        <hr class="my-4" />
        <p>And before we forget what maybe your name?</p>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder=""
            aria-label=""
            aria-describedby="basic-addon1"
          />
          <div class="input-group-prepend">
            <button class="btn btn-outline-secondary" type="button">
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
