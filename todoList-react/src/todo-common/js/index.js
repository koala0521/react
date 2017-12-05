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
            todoList: props.data,
            inputValue:'',
            inEditing:false,
            nowShowing: props.nowShowing
        };

        //批量操作按钮
        this.checkedAll = null;
    }


    //保存数据到cooies
    saveData = ()=>{

        let {todoList} = this.state;
        let data = { todoList : todoList };
        document.cookie = 'data=' + JSON.stringify(data);

    }
    //输入信息
    changeValue = (ev)=>{
        let inputValue = ev.target.value;
        this.setState({
            inputValue
        });
    }

    //添加todo
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
    
            },()=> {

                let {todoList} = this.state;
                this.isCheckedAllFn( todoList );
            });
        }


    }

    //删除todo
    deletTodo =(id)=>{
        let {todoList} = this.state;
        let list = todoList.filter(item=>{

            return item.id !== id;
        });
        
        this.setState({
            todoList:list

        },()=> {

            let {todoList} = this.state;
            this.isCheckedAllFn( todoList );
        });

    }

    // 修改todo状态：完成 or 未完成
    changItemState = ( id )=>{

        let {todoList} = this.state;
        let list = todoList.map(item=>{
            if( item.id === id ){
                item.isChecked = !item.isChecked;                
            }
            return item;
        });
        this.isCheckedAllFn( todoList );
        this.setState({
            todoList:list

        });     
    }

    //全选按钮状态
    isCheckedAllFn = ( todoList )=>{

        let isCheckedAll = todoList.every(item=>{
            return (item.isChecked === true);
        });
        this.checkedAll.checked = isCheckedAll && todoList.length ;        
    }

    // 批量操作 ： 全部完成 or 完全未完成
    toggleAll = ( ev )=>{
        let {checked} = ev.target; 
        let {todoList} = this.state;
        let list = todoList.map(item=>{
            item.isChecked = checked;                
            return item;
        });
        this.setState({
            todoList:list

        });  
    }
    
    // 进入 or 退出 编辑状态
    toggleEditing = ( id , bl )=>{

        let {todoList} = this.state;
        let list = todoList.map(item=>{
            if( item.id === id ){
                item.inEdit = bl;                
            }
            return item;
        });
        this.setState({
            todoList:list

        });           
    }

    //修改 todo.content 完成
    changedTodoContent = ( content , id )=>{

        let {todoList} = this.state;
        let list = todoList.map(item=>{
            if( item.id === id ){
                item.content = content;                
            }
            return item;
        });
        this.setState({
            todoList:list

        });          

    }

    // 删除完成任务
    clearCompleted = ()=>{
        
        let {todoList} = this.state;
        let list = todoList.filter(item=>{
            return item.isChecked === false;
        });
        this.setState({

            todoList:list

        },()=> {
            let {todoList} = this.state;
            this.isCheckedAllFn( todoList );
        });          
    }

    //修改数据筛选状态：all || completed || active
    changeFilterState = (state)=>{
        
        if( state !== "all"  && state !== "completed" && state !== "active"  ){
            state = "all";
        }
        this.setState({

            nowShowing:state

        });         

    }

    //数据筛选
    filterData = ( data )=>{
        let { nowShowing } = this.state;
        data = data || [];
        data = data.filter((item)=>{
            if( nowShowing === "completed" ){
                return item.isChecked;
            }
            if( nowShowing === "active" ){
                return !item.isChecked;
            }
            return item;             
        });


        return data;
    }


    render() {
        let { todoList , inputValue , inEditing ,  nowShowing } = this.state;

        //先过滤，在渲染
        let todos = this.filterData(todoList).map(todo=>{
            return <Content 
                key={ todo.id }
                { ...todo }
                inEditing = { inEditing }
                handels = {
                    {
                        deletTodo : this.deletTodo,
                        changItemState:this.changItemState,
                        changedTodoContent:this.changedTodoContent,
                        toggleEditing :this.toggleEditing 
                    }
                }
            />
        });

        //保存数据
        this.saveData();

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


            <section className={"main" + ( todoList.length ? "" : " hide") } >
                <input
                    className="toggle-all"
                    type="checkbox"
                    onChange={ (ev)=> this.toggleAll(ev) }
                    ref={ (el)=> this.checkedAll = el }
                />
                <ul className="todo-list">
                    { todos }
                </ul>
            </section>
            <Footer                
                nowShowing = { nowShowing }
                todoList = { todoList }
                handels={
                    {
                        clearCompleted:this.clearCompleted,
                        changeFilterState:this.changeFilterState
                    }
                }                
            ></Footer>
        </div>
        )
    }
}


//从cooies取数据

//获取某个cookie对应的cookie
function getCookie(name){
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    arr=document.cookie.match(reg);
    return arr ? arr[2] : null;
}


//获取 hash 值
function gethash(){
    let state = window.location.hash.substr(2);
    if( state !== "all"  && state !== "completed" && state !== "active"  ){
        state = "all";
    }    
    return state;
}


let a = getCookie('data');


ReactDOM.render(
    <TodoApp 
        data={ a ? JSON.parse(a).todoList : [] } 
        nowShowing={ gethash() }
    />,
    root

);
