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
    const stack = ['HTML', 'CSS', 'Vanila JavaScript', 'ECMA Script5++', 'jQuery', 'Angular2', 'React', 'Vue.js', 'Kotlin-Android', 'React Native', 'Node.js', 'MySQL', 'Express', 'Webpack/bundle', 'RESTful API', 'PhotoShop', 'ILLustrator'];
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
        <div className="section1 section">
          <div className="sectionTitle">
            기술스택
          </div>
          <div className="stackWrap">
            {stack.map(res => {
              return <div className="stack" key={res}>#{res}</div>
            })}
          </div>
        </div>
        <div className="section2 section">
          <div className="sectionTitle">
            관련링크
          </div>
          <div className="linkBtnWrap">
            <div className="linkBtn" onClick={() => {
              window.open('https://github.com/sangmin802');
            }}>깃허브</div>
            <div className="linkBtn" onClick={() => {
              window.open('https://github.com/sangmin802/portfolio');
            }}>포트폴리오 디렉토리</div>
            <div className="linkBtn" onClick={() => {
              window.open('https://sangmin802.github.io/');
            }}>기술 블로그</div>
          </div>
        </div>
        <div className="section3 section">
          <div className="sectionTitle">
            포트폴리오
          </div>
          {/* <div className="slideExp">
            <div className="dragImg">
            </div>
          </div> */}
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
        <div className="section4 section">
          <div className="sectionTitle">
            연락처
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
          result.innerHTML='.';
          count=1;
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
    }, 35);
  }

  componentDidUpdate(){
    window.addEventListener('scroll', () => {
      const content = document.querySelectorAll('.portfolio');
      [...content].forEach((res, index) => {
        if(index !== 0){
          const range = window.pageYOffset+window.innerHeight;
          const contTop = res.offsetTop+100;
          if(range > contTop){
            this.recursiveFnc(res)
            res.classList.remove('portContAni2');
            res.classList.add('portContAni1');
          }else{
            res.classList.remove('portContAni1');
            res.classList.add('portContAni2');
          }
        }
      })
    })
  }

  recursiveFnc(target){
    const child = [...target.childNodes];
    child.forEach(res => {
      if(res.classList){
        if([...res.classList].includes('pcImg')){
          const src = res.dataset.src;
          res.src = src;
        }else if([...res.classList].includes('mobileImg')){
          const src = res.dataset.src;
          res.src = src;
        }else if([...res.classList].includes('fullMobileImg')){
          const src = res.dataset.src;
          res.src = src;
        }else{
          this.recursiveFnc(res);
        }
      }
    })
  }
}