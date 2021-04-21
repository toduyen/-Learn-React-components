import React, { Component } from 'react';
const a1 = "Tuan"
function One (props) {
  return(
    <div className="card text-white bg-primary">
    <img className="card-img-top" src={props.image} alt="hello" />
    <div className="card-body">
      <h4 className="card-title">{props.title}</h4>
      <p className="card-text">{props.text}</p>
    </div>
  </div>
  )
}
class Master extends Component {
  render() {
    return (
      <div>
            <div className="card">
        <div className="card-body">
          <blockquote className="blockquote">
            <p>{this.props.title}</p>
            <footer className="card-blockquote">Footer<cite title="Source title">{this.props.source}</cite></footer>
          </blockquote>
        </div>
      </div>
      <h1>{a1}</h1>
      </div>
    );
  }
}


const so1 = [1,2,3,4,5,6,7];
const so2 = so1.map((x)=>x*2);
const so3 = so2.map((x) => (
  <li>{x*2}</li>
))

class App extends Component {
  render() { 
    return (
      <div>
            <One image="https://vccorp.vn/Images/vccorp-15b8528c47c28f0b.png" title="UMAL" text="KAKA"/>
            <Master source="Tuan lom" title="Khoong lafm afeasf"/>
            {so2}
            {so3}
      </div>
    );
  }
}
 
export default App;