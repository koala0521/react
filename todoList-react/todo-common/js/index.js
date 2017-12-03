import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "../style/App.css";
import "../style/index.css";
import Header from './headCom.js';
import Content from './content.js';
import Footer from './footer';



export default class TodoApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            todoList:[],
            inputValue:''
        };
    }
    
    //输入信息
    changeValue = (ev)=>{
        let inputValue = ev.target.value;
        this.setState({
            inputValue
        });
    }

    //添加任务
    addTodo = (ev)=>{
        let val = ev.target.value;
        if( val.trim() === '' ){
            return;
        }
        let {todoList} = this.state;

        if(ev.keyCode === 13){
            let item = {
                id : Math.random(),
                content:ev.target.value,
                isChecked:false,
                inEdit:false
            };              

            this.setState({
                todoList:[...todoList,item],
                inputValue:''
    
            });
        }


    }

    //删除任务
    deletTodo =(id)=>{
        let {todoList} = this.state;
        let list = todoList.filter(item=>{

            return item.id !== id;
        });
        
        this.setState({
            todoList:list

        });

    }

    // 修改任务状态：完成 or 未完成
    changItemState = ( id )=>{

        let {todoList} = this.state;
        let list = todoList.map(item=>{
            if( item.id === id ){
                item.isChecked = !item.isChecked;                
            }
            return item;
        });
        this.setState({
            todoList:list

        });     
    }
    
    // //进入任务编辑状态
    // inEditItem = ( input , id )=>{

    //     let {todoList} = this.state;
    //     let list = todoList.map(item=>{
    //         if( item.id === id ){
    //             item.inEdit = true;                
    //         }else{
    //             item.inEdit = false;  
    //         }

    //         return item;
    //     });
    //     this.setState({
    //         todoList:list

    //     },()=>{

    //         input.focus();
    //     });
    // }

    //取消编辑状态
    outEdit = (ev)=>{
        if( ev.keyCode === 27 || ev.keyCode === 13 ){
            let {todoList} = this.state;
            let list = todoList.map(item=>{
                item.inEdit = false;  
                return item;
            });        
    
            this.setState({
                todoList:list
    
            });
        }

    }

    render() {
        let { todoList , inputValue} = this.state;

        let todos = todoList.map(todo=>{
            return <Content 
                key={ todo.id }
                { ...todo }
                handels = {
                    {
                        deletTodo : this.deletTodo,
                        changItemState:this.changItemState,
                        inEditItem:this.inEditItem,
                        outEdit:this.outEdit
                    }
                }
            />
        });

        return (
            <div>
            <Header
                inputValue = {inputValue}
                handels={
                    {
                        changeValue:this.changeValue,
                        addTodo:this.addTodo
                    }
                }
            />


            <section className="main">
                <input
                    className="toggle-all"
                    type="checkbox"
                />
                <ul className="todo-list">
                    { todos }
                </ul>
            </section>
            <Footer></Footer>
        </div>
        )
    }
}


ReactDOM.render(
    <TodoApp />,
    root

);
