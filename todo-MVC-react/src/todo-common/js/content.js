import React, { Component } from 'react';
import "../style/App.css";
import "../style/index.css";

export default class Content extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            editValue:'',
            inEditting:false
        };
        
        this.input = null;
    }

   
    //进入任务编辑状态
    inEditItem = ( ev , content , id )=>{
        
        this.setState({
            editValue:content,
            inEditting:true
        },()=>{

            this.input.focus();
        });
    }    
   
    //取消编辑、完成编辑
    outEdit = (ev , id )=>{

        if( ev.keyCode === 27 || ev.keyCode === 13 ){
            let { editValue } = this.state;
            let { changedTodoContent } = this.props.handels;

            if( ev.keyCode === 13 && editValue.trim() !== "" ){
                changedTodoContent( editValue , id );  
            }
                    
            this.setState({
                editValue:"",
                inEditting:false
    
            },()=>{
                
                this.input.blur(); 
            });
        }

    }

    //input失去焦点检测编辑状态
    blurFn = ( id )=>{
        let { editValue } = this.state;
        let { changedTodoContent } = this.props.handels;
        if( editValue.trim() !== "" ){
            changedTodoContent( editValue , id );              
        }
        this.setState({
            editValue:"",
            inEditting:false

        });

    }

    //编辑 todo 内容  => 让组件受控
    changetodoValue=(ev)=>{
        this.setState({
            editValue:ev.target.value
        });
    }

    render() {

        let { isChecked , content , id } = this.props;
        let { deletTodo , changItemState } = this.props.handels;
        let {inEditting} = this.state;
        let className = "";
        isChecked ? className += "completed" : "";
        inEditting ? className += " editing" : "";

        return(
            <li 
            key={ id } 
            className={ className }
            >
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        onChange={ ()=>changItemState(id) }
                        checked={ isChecked }
                    />
                    <label 
                        onDoubleClick ={ ( ev )=>this.inEditItem( ev , content , id ) }
                    
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
                    onKeyDown={ (ev)=> this.outEdit( ev , id ) }
                    ref={(ev)=>this.input=ev}
                    onChange={ (ev)=>this.changetodoValue(ev) }
                    onBlur={ ()=> this.blurFn( id ) }
                />
            </li>

        );
    }
}