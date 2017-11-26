import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';


let data = [
  {id:1,content:'欢迎来到妙味课堂',inputValue:'',show:false},
  {id:2,content:'hello world',inputValue:'',show:false}
];

class App extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          data : props.data
      };
      this.isEdit = this.isEdit.bind(this);
      this.create = this.create.bind(this);
      this.clickBtn = this.clickBtn.bind(this);
      this.changeValue = this.changeValue.bind(this);
  }
// 是否编辑状态
  isEdit(id , bl){
    let arr = this.state.data;
    this.setState({
        arr : arr.map( (item)=>{
           if (item.id === id ) {
               item.show = bl;
               //记录input初始值
               item.inputValue = item.content;
           }
       } )
    });
  }

  //点击取消或者保存
clickBtn( id , bl ){
    let arr = this.state.data;
    //确认保存
    if( bl ){

      this.setState({
          arr : arr.map( (item)=>{
             if (item.id === id ) {
                 item.content = item.inputValue;
                 item.inputValue = '';
             }
         } )
      });
    }

    this.isEdit(id , false);

}

//记录input内容
changeValue( v , id ){
    let arr = this.state.data;
    this.setState({
        arr : arr.map( (item)=>{
           if (item.id === id ) {
               item.inputValue = v;
           }
       } )
    });
}

//生成结构
  create(data){
    let arr = data.map( (item)=>{

        if( !item.show ){

            return(
              <div key={ item.id } className="show">
               <p className="info">{ item.content }</p>
               <a
                    href="javascript:;"
                    className="btn"
                    onClick={ ()=>this.isEdit( item.id , true ) }

                    ></a>
             </div>
            );

        }else {

          return(
            <div key={ item.id } className="alter">
              <input
                  type="text"
                    value={  item.inputValue  }
                    onChange = {
                         (ev)=> this.changeValue(ev.target.value , item.id )
                     }
               />
              <span
                className="sure"
                onClick={ ()=> this.clickBtn( item.id , true ) }

                  >确定</span>
              <span
                className="cancel"
                onClick={ ()=> this.clickBtn( item.id , false ) }

                  >取消</span>
            </div>
          );
        }

    });

    return arr;

  }

  render(){
    return this.create( this.state.data );
  }

}

ReactDOM.render(
  <div className="wrap">
    <div className="text">
      <div className="text_i">
        <App data = { data } ></App>
      </div>
    </div>
  </div>,
  document.getElementById('root')
);


//
// <div ="wrap">
//   <div className="text">
//     <div className="text_i">
//       <div className="show">
//         <p className="info">欢迎来到妙味课堂</p>
//         <a href="javascript:;" className="btn"></a>
//       </div>
//       <div className="alter">
//         <input type="text" />
//         <span className="sure">确定</span>
//         <span className="cancel">取消</span>
//       </div>
//     </div>
//     <div className="text_i">
//       <div className="show">
//         <p className="info">欢迎来到妙味课堂</p>
//         <a href="javascript:;" className="btn"></a>
//       </div>
//       <div className="alter">
//         <input type="text" />
//         <span className="sure">确定</span>
//         <span className="cancel">取消</span>
//       </div>
//     </div>
//   </div>
// </div>
