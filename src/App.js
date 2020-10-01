import React from "react";
import { Navbar } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ConstituencyCard from "./ConstituencyCard";
import data from "./data.js";

function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">SVG VOTES</Navbar.Brand>
        </Navbar>
      </div>

      {data.map((obj) => {
        return (
          <ConstituencyCard
            constituency={obj.constituency}
            candidates={obj.candidates}
          />
        );
      })}
    </>
  );
}

export default App;
