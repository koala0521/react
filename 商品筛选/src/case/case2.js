import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import data from './goodsSortData.js';
import '../../src/case2.css';


//商品筛选的例子

class ChooseGoods extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div id="section">
                <div id="choose"></div>
                <div id="type"></div>
            </div>
        );
    }
}

console.log( data );

ReactDOM.render(
    <div id="wrap">
        <div id="section"></div>
    </div>,
    root
);
