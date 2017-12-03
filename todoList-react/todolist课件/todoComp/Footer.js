import React,{Component} from 'react';

export default class Footer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let {
            view
        } = this.props;
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong></strong> left
                </span>
                <ul className="filters">
                    <li>
                        <a
                            href="#/"
                            className={view==='all' ? 'selected': ''}
                        >
                            all
                        </a>
                    </li>
                    {' '}
                    <li>
                        <a
                            href="#/active"
                            className={view==='active'? 'selected': ''}
                        >
                            active
                        </a>
                    </li>
                    {' '}
                    <li>
                        <a
                            href="#/completed"
                            className={view==='completed'? 'selected': ''}
                        >
                            completed
                        </a>
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
