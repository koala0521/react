import React, { Component } from 'react';
import "../style/App.css";
import "../style/index.css";

export default class Content extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            inEdit:false,
            editValue:''
        };
        
        this.input = null;
    }

   
    //进入任务编辑状态
    inEditItem = ()=>{
        
        let {input , inEdit} = this.state;

        this.setState({
            inEdit:true

        },()=>{

            this.input.focus();
        });
    }    
   
    //取消编辑状态
    outEdit = (ev)=>{

        if( ev.keyCode === 27 || ev.keyCode === 13 ){

            let {input , inEdit} = this.state;
            this.setState({
                inEdit:false,
                editValue:""
    
            },()=>{
    
                this.input.focus();
            });
        }

    }

    //编辑任务
    changetodoValue=(ev)=>{
        console.log(ev.target);
        this.setState({
            editValue:ev.target.value
        });
    }


    render() {

        let {todo,isChecked,content,id} = this.props;
        let { deletTodo , changItemState } = this.props.handels;
        
        let className = "";
        isChecked ? className += "completed" : "";
        this.state.inEdit ? className += " editing" : "";

        return(
            <li 
            key={ id } 
            className={ className }
            >
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        onClick={ ()=>changItemState(id) }
                        value={ isChecked }
                    />
                    <label 
                        onDoubleClick ={ this.inEditItem }
                    
                    >
                        { content }
                    </label>
                    <button 
                        className="destroy"                        
                        onClick = { ()=>deletTodo( id ) }
                    />
                </div>
                <input
                    className="edit"
                    value={ this.state.editValue }
                    onKeyDown={ (ev)=> this.outEdit(ev) }
                    ref={(ev)=>this.input=ev}
                    onChange={ (ev)=>this.changetodoValue(ev) }
                />
            </li>

        );
    }
}