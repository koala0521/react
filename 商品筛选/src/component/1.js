import React from 'react';
import ReactDOM from 'react-dom';


class Test extends React.Component{

  constructor(props){
    super(props);
    // 状态管理
    this.state = { title:props.title, content:'我是初始化内容'};
    //绑定this到自定义的方法中
    this.changeStr = this.changeStr.bind(this);
  }

  // react类中， 自定义函数中的this为 默认为 undefined
  changeStr(){

    var randomStr = Math.random().toString(16).substring(2);
    //修改状态用setState()方法：
    this.setState({content:randomStr});

  }

  // 类的 rander函数必须有
  render(){

    return (
      <div>
        {/* 这是注释 */}
        <h3> { this.state.title } </h3>
        <div>
          我是内容：
          { this.state.content }
        </div>
        <Child contents={ this.state.content } ></Child>
        <div>
          <button
              onClick = { this.changeStr }
            >
              点击修改
            </button>
        </div>
      </div>
    );
  }
}


class Child extends React.Component{

  render(){

    return(

      <h3

        style={ { backgroundColor:'yellow' } }

        >我是子类,内容来源父级：{ this.props.contents }</h3>

    );
  }
}

// ReactDOM.render(
//   <div style={ { backgroundColor:'pink',color:'#333' } } >
//     这是racet联系
//     <Test title='react学习第一课' ></Test>
//     <Test title='react学习第一课' ></Test>
//   </div>,
//   document.getElementById('root2')
// );
