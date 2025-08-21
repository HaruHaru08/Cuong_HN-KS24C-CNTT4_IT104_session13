import { Component } from 'react'
import Children_Comp from './Children_Comp'

export type Self={
    name:string,
}
export default class Parent_Comp extends Component<object,Self> {
    constructor(props:object){
        super(props)
        this.state={
            name:"Nguyen Van Nam",
        }
    }
  render() {
    return (
      <div>
        <p>Họ và tên bên component cha: {this.state.name}</p>
        <Children_Comp name={this.state.name}></Children_Comp>
      </div>
    )
  }
}
