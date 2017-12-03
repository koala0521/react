import React,{Component} from 'react';

export default class Item extends Component{
    constructor(props){
        super(props);

        this.state={
            inEdit: false,
            editValue: ''
        }
    }

    // 进入编辑状态
    onEdit=()=>{
        this.setState({
            inEdit:true,
            editValue: this.props.content
        },()=>{

            this.editInput.focus()
        })
    }

    //
    onEditInputChange=({target:{value}})=>{
        this.setState({
            editValue: value
        });
    }

    onEditStateChange=({keyCode, target})=>{

        let {onEditDone, id} = this.props;

        if(keyCode === 27 || keyCode===13){
            this.setState({
                inEdit:false,
                editValue: ''
            });
        };

        if(keyCode!==13)return;
        onEditDone(id, this.state.editValue);

    }

    render(){



        let {
            id,
            content,
            isCompleted,
            onDelete,
            onToggle
        } = this.props;

        let {
            inEdit,
            editValue
        } = this.state;

        let {
            onEdit,
            onEditInputChange,
            onEditStateChange
        } =  this;

        // inEdit

        let liClassName = '';

        if(isCompleted) liClassName+="completed"
        if(inEdit) liClassName+=' editing'

        return (
            <li
                className={liClassName}
            >
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={isCompleted}
                        onChange={()=>onToggle(id)}
                    />
                    <label
                        onDoubleClick={onEdit}
                    >
                        {content}
                    </label>
                    <button
                        className="destroy"
                        onClick={()=>onDelete(id)}
                    />
                </div>
                <input
                    className="edit"
                    value={editValue}
                    onChange={onEditInputChange}
                    onKeyDown={onEditStateChange}
                    ref={el=>this.editInput=el}
                />
            </li>
        )
    }
}
