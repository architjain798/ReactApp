import React from "react";
import "../styling/SearchItem.css";
import Card from "./Card";
import Data from "./Data";


class SearchItem extends React.Component {
  state={inputText:"",alphabet:""};

  onInputChange=(e)=>{
    this.setState({inputText:e.target.value});
    //this.state.inputText=e.target.value;
  }
  onAlphabetClick = (e) => {
        this.setState({alphabet: e.target.value})
      }

  onSubmitBtn=()=>{
    console.log(this.state.inputText);
   // this.setState();
  }

  prepareAlphabets = () => {
    let result = [];
    for (let i = 65; i < 91; i++) {
      result.push(
        <button
          className="btn-alpha"
          type="button"
          key={i}
          onClick={this.onAlphabetClick}
          value={String.fromCharCode(i)}
        >
          {String.fromCharCode(i)}
        </button>
      );
    }
    return result;
  };
  render() {
    console.log(this.state.alphabet);
    return (
      <div className="search">
        <h2>Lorem Epsum Dollor</h2>
        <span>
          <input id="input-search" type="text" placeholder="enter the value" onChange={this.onInputChange}/>
        </span>
        <span>
          <button id="searchBtn" onClick={this.onSubmitBtn}>Search</button>
        </span>
        <br />
        <button id="all-btn">ALL</button>
        {this.prepareAlphabets()}
        <div className="list-card">
          
          {Data.filter((val)=>{
            if (this.state.inputText=="")
              return val;
            else if (val.title.toLowerCase().includes(this.state.inputText.toLowerCase() ))
              return val;
          }).map((val)=>{
            return (
              <Card imgSrc={val.image} title={val.title} detail={val.detail} key={val.id}/>
            )
          })}
        </div>
      </div>
    );
  }
}
export default SearchItem;
