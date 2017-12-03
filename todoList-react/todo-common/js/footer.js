import React, { Component } from 'react';
import "../style/App.css";
import "../style/index.css";


export default class Footer extends Component {
  render() {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong></strong> left
            </span>
            <ul className="filters">
                <li>
                    <a
                        href=" "
                    >
                        all
                    </ a>
                </li>
                {' '}
                <li>
                    <a
                        href="#/active"
                    >
                        active
                    </ a>
                </li>
                {' '}
                <li>
                    <a
                        href="#/completed"
                    >
                        completed
                    </ a>
                </li>
            </ul>
            <button
                className="clear-completed"
            >
                Clear completed
            </button>
        </footer>
    )
  }
}


 