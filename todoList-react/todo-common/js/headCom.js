import React, { Component } from 'react';
import "../style/App.css";
import "../style/index.css";

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue:this.props.inputValue

        };
    }


    render() {
        let {changeValue,addTodo} = this.props.handels;
        return (
            <header className="header">

                <h1>todos</h1>
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    value= { this.props.inputValue }
                    onChange = { (ev)=> changeValue(ev) }
                    onKeyDown = { (ev)=>addTodo(ev) }
                />
            </header>
        )
    }
}
