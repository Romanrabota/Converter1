import './App.css';
import React from "react";
import {getKurs} from ".//api/index.js";


class Convert extends  React.Component {
  constructor(props) {
    super(props);
    this.state = {
        dolar:0,
        grivna:0,
        money:0,
        kurs:0,
       
    } 
   
}



changeHandler = ({target:{value,dolar,grivna,name,}}) =>{
    this.setState ({    
        [name]:Number(value),
    })
}


componentDidMount(){
  getKurs().then(data=>{
  this.setState({
    kurs:Number(data[0].sale)
  }) 
  });
}



render(){
return (
   <>
 <label>Гривна</label>
 <input type="text" placeholder='Введите количесто гривен' name="grivna" value={this.state.grivna} onChange={this.changeHandler}></input> 
 <label>Доллар</label>
 <input type="text" placeholder='Введите количество доларов'  name="dolar" value={this.state.grivna/this.state.kurs}></input>
  </>
)
}

}


export default Convert;
