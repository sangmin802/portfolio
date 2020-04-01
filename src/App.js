import React from 'react';
import './App.css';

import PortDetail from './Components/PortDetail.js';

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
          let className;
          if(type === 1){
            className = 'portfolio';
          }else{
            className = 'portfolio rightPortfolio';
          }
          return <PortDetail key={res.id} data={res} className={className} />
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