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
      mode:'read',
      welcome:{title:'Welcome', desc:'Welcome React!'},
      //state값을 초기화한다. subject의 값을 state화 시킬거임, subject의 프로퍼티(props)값으로 
      subject : {title : 'WEB', sub: 'World wide web!'},
      //부모가 가지고 있는 state 를 이용해서 TOC 내부 데이터가 바뀌게 해줄거임
      contents: [
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  //render : 어떤 html을 그릴것인지 결정하는 함수
  // prop나 state의 값이 바뀌면 해당되는 컴퍼넌트의 랜더 함수가 호출되도록 약속되어있다. -> 화면이 다시 그려진다

  render(){
    console.log('App Render');
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      _title= this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    console.log('render',this);
    return(
      <div className="APP">
        {/* <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject> */}
        <header>
          <h1><a href="/" onClick={function(e){
            console.log(e);
            //이벤트가 발생한 태그의 기본적인 동작 방법을 못하게 막는 함수
            e.preventDefault();
            //this.state.mode = 'welcome'; 이렇게 하고싶다
            //bind를 한 다음에 setState를 이용해서 state를 바꿔주어야 한다.
            this.setState({
              mode:'welcome'
            });
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
        {/* data라고 하는 props 로 컨텐츠를 주입 */}
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
