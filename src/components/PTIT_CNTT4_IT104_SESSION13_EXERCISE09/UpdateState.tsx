import { Component } from 'react'

type Company={
    name:string;
}
export default class UpdateState extends Component<object,Company> {
   constructor(props:object){
    super(props);
    this.state={
        name:"Rikkei Academy"
    }
   }
   update=()=>{
    this.setState({name:"Rikkei Soft"})
   }
  render() {
    return (
      <div>
        <h2>Tên công ty: {this.state.name}</h2>
        <button onClick={this.update}>Change</button>
      </div>
    )
  }
}
