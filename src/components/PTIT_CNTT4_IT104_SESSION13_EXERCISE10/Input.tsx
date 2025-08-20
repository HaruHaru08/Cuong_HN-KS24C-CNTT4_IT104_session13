import { Component, type ChangeEvent } from 'react'

type Output={
    value:string;
}
export default class Input extends Component<object,Output> {
    constructor(props:object){
        super(props);
        this.state={
            value:"",
        }
    }
    act=(e:ChangeEvent<HTMLInputElement>)=>{
        {this.setState({value:e.target.value})}
    }
  render() {
    return (
      <div>
        <h2>Du lieu: {this.state.value}</h2>
        <input type="text" onChange={this.act}/>
      </div>
    )
  }
}
