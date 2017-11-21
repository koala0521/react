import React, {Component} from 'react';
import ReactDOM from 'react-dom';

require('./common/style/main.css');

let data = {
	titles:'Comments',
	list:[
		{
			img:'./img/1.jpg',
			name:'小王子',
			texts:'今天天气正好啊，我正想吟诗一首'
		}
	]
};
    
ReactDOM.render(
    <div className='comment-warp' > 	    
	<div className="title"> { data.titles || '' } </div>
	<ul className="list" >
		<li className="item" >
			<div className="photo">
				<img src={ data.list[0].img } />
			</div>
			<div className="person-info">
				<div className="name">
					{ data.list[0].name }
				</div>
				<div className="">
					{ data.list[0].texts }
				</div>
				<div>
					<a  className="btn" href='javascript:;' >回复</a>
				</div>
			</div>
		</li> 		    		
	</ul>
	<div className="text-warp">
		<textarea className="" name="" rows="10" cols="10"></textarea>
		<button className="enter-btn" >回复</button>
	</div>	    	
   		
    </div>,
    document.getElementById('root')
);   

//ReactDOM.render(
//  <div className='main' data-a='1' data-bb={ 2 + 3 } style={ { height:'50px',fontSize:'18px' } } > <span className='fff' > { str } </span> ,World</div>,
//  document.getElementById('root')
//);


/*
 * 
 * JSX语法：在js中直接书写html标签
 * 需要注意
 * 1：再给元素添加class时，要用className，即JSX语法中不能用js的关键字和保留字
 * 2.添加自定义属性时，要用data-。属性值必须是字符串或者 jsx表达式语法 即：data-a={ 1 }
 * 3.JSX语法渲染变量和表达式要用{}包起来
 * 4.JSX语法中写行间样式要写成对象形式 ，样式要用{}包起来,属性名要用小驼峰写法: style={ { height:'50px' , fontSize:'18px' } }
 * */

if(module.hot){ 
    module.hot.accept()
}
