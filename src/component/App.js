import React from "react";
import "../styling/App.css";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div className="container">
      <br/>
        <Navbar />
        <MainContent />
        <Footer/>
      </div>
    );
  }
}
export default App;
