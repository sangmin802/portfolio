import React from 'react';
import './App.css';

import LeftSide from './Components/LeftSide.js';
import RightSide from './Components/RightSide.js'

export default class App extends React.Component {
  state = {
    isLoading : true,
    data : []
  }
  render(){
    const {isLoading, data} = this.state;
    if(isLoading){
      return (
        <div className="loading">Loading...</div>
      )
    }
    return (
      <div className="appWrap">
        <div className="slideExp">
          <div className="dragImg">
          </div>
        </div>
        {data.map(res => {
          const type = res.id%2;
          switch(type){
            case 1 : {
              return <LeftSide key={res.id} data={res} />
            }
            case 0 : {
              return <RightSide key={res.id} data={res} />
            }
            default : {
              return null;
            }
          }
        })}
      </div>
    );
  }

  getData(){
    // fetch('/json/data.json')
    fetch('https://raw.githubusercontent.com/sangmin802/portfolio/master/public/json/data.json')
    .then(response => response.json())
    .then(data => {
      this.setState({data : data, isLoading : false});
    })
  }

  componentDidMount(){
    this.getData();
  }
}