import React, { Component } from 'react';
import "../style/App.css";
import "../style/index.css";


export default class Footer extends Component {

  render() {
    
    let { todoList , nowShowing } = this.props;
    let { clearCompleted , changeFilterState } = this.props.handels;

    let unCompleted = todoList.filter( item=>{

        return !item.isChecked;
    });
    let completed = todoList.filter( item=>{
        
        return item.isChecked;
    });    
    
    return (
        <footer className={"footer" + ( todoList.length ? "" : " hide") } >
            <span className="todo-count">
                <strong>
                 { unCompleted.length + ( unCompleted.length > 1 ? ' items' : 'item' ) }   
                </strong> left
            </span>
            <ul className="filters">
                <li>
                    <a
                        href="#"
                        className={ nowShowing === "all" ? "selected" : ""}
                        onClick={ ()=>changeFilterState("all") }
                    >
                        all
                    </ a>
                </li>
                {' '}
                <li>
                    <a
                        href="#/active"
                        className={ nowShowing === "active" ? "selected" : ""}
                        onClick={ ()=>changeFilterState("active") }
                    >
                        active
                    </ a>
                </li>
                {' '}
                <li>
                    <a
                        href="#/completed"
                        className={ nowShowing === "completed" ? "selected" : ""}
                        onClick={  ()=>changeFilterState("completed")  }
                    >
                        completed
                    </ a>
                </li>
            </ul>
            <button
                className={"clear-completed" + ( completed.length ? "" : " hide" ) }
                onClick={ clearCompleted }
            >
                Clear completed
            </button>
        </footer>
    )
  }
}


 