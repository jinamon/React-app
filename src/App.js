import React,{ Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';
import './App.css';


class App extends Component{
  //props를 쓰기위한 코드
  //어떤 Component가 실행될 때 render함수보다 먼저 실행이 되면서 그 Component를 초기화 시켜주고싶은 코드는 constructor 를 만들고 안에다 코드를 작성한다.
  constructor(props){
    super(props);
    this.state = {
      //state값을 초기화한다. subject의 값을 state화 시킬거임, subject의 프로퍼티(props)값으로 
      subject : {title : 'WEB', sub: 'World wide web!'}
    }
  }
  render(){
    return(
      <div className="APP">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject>
        <TOC></TOC>
        <Content title="HTML" desc=" HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
