import React, { Fragment } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <Body />
      <div className="btn">
        <a href="http://localhost:3000/brayanbarroso/page-404">
          Back to homepage
        </a>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
