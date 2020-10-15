import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div class="jumbotron">
        <h1 class="display-4">Welcome!</h1>
        <p class="lead">
          This is a simple student assistant that helps you keep track of your
          academics, take notes, calaulate formulas and many more.
        </p>
        <hr class="my-4" />
        <p>And before we forget what maybe your name?</p>
        <div
          class="input-group mb-3"
          style={{ width: "250px", marginLeft: "auto", marginRight: "auto" }}
        >
          <input
            type="text"
            class="form-control"
            placeholder="Name"
            aria-describedby="basic-addon1"
          />
          <div class="input-group-prepend">
            <button class="btn btn-outline-primary" type="button">
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
