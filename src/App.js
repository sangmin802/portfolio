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
    const mainStack = ['HTML', 'CSS', 'Vanila JavaScript', 'ECMA Script5++', 'jQuery', 'Angular2', 'React'];
    const studying = ['React Native', 'Node.js', 'MySQL', 'Express', 'Webpack/bundle', 'RESTful API', 'PhotoShop', 'ILLustrator']
    if(isLoading){
      return (
        <div className="loading">
          <div className="loadingText"></div>
          <div className="loadingResult"></div>
        </div>
      )
    }
    return (
      <div className="appWrap">
        <div className="myStack">
          <div className="mainStack">
            <div className="stackTitle">
              Main Stack
            </div>
            {mainStack.map(res => {
              return <span className="stack" key={res}>#{res}</span>
            })}
          </div>
          <div className="studying">
            <div className="stackTitle">
              Studying & Sub Stack
            </div>
            {studying.map(res => {
              return <span className="stack" key={res}>#{res}</span>
            })}
          </div>
          <div className="studyingRecord" onClick={() => {
            window.open('https://github.com/sangmin802');
          }}>Studying Record → 깃허브 보러가기</div>
          <div className="studyingRecord" onClick={() => {
            window.open('https://github.com/sangmin802/portfolio');
          }}>포트폴리오 디렉토리로 이동하기</div>
        </div>
        <div className="sectionTitle padding">
          Portfolio
        </div>
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
        <div className="contact padding">
          <div className="contactTitle sectionTitle">
            Contact
          </div>
          <div className="contactCont">
            Name : 박상민
          </div>
          <div className="contactCont">
            Call : 010-3529-7158
          </div>
        </div>
      </div>
    );
  }

  getData(_loading){
    let count = 0;
    const result = document.querySelector('.loadingResult');
    let interval = () => {
      return setInterval(() => {
        if(count < 3){
          result.innerHTML+='.';
          count++;
        }else{
          result.innerHTML='';
          count=0;
        }
      }, 200)
    };
    const id = interval();
    // fetch('/json/data.json')
    setTimeout(() => {
      fetch('https://raw.githubusercontent.com/sangmin802/portfolio/master/public/json/data.json')
      .then(res => res.json())
      .then(data => {
        clearInterval(id);
        result.innerHTML='<span class="loadingDone">Welcome!</span>';
        setTimeout(() => {
          result.innerHTML='';
          _loading.innerHTML='';
          this.setState({data : data, isLoading : false});
        }, 1000)
      })
    }, 1500)
  }

  componentDidMount(){
    let count = 0;
    const string = 'npm install --save -dev sangmin802-portfolio';
    const strArr = string.split('');
    const loading = document.querySelector('.loadingText');
    var interval = setInterval(() => {
      if(count < strArr.length){
        loading.innerHTML+=strArr[count];
        count++;
      }else{
        clearInterval(interval)
        this.getData(loading);
      }
    }, 70);
  }

  componentDidUpdate(){
    window.addEventListener('scroll', () => {
      const content = document.querySelectorAll('.portfolio');
      [...content].forEach((res, index) => {
        const range = window.pageYOffset+window.innerHeight;
        const contTop = res.offsetTop+100;
        if(range > contTop){
          res.classList.remove('portContAni2');
          res.classList.add('portContAni1');
        }else{
          res.classList.remove('portContAni1');
          res.classList.add('portContAni2');
        }
      })
    })
  }
}