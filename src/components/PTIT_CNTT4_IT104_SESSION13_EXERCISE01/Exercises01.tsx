import { Component } from 'react'

type User={
    name:string,
}
export default class Exercises01 extends Component<object,User> {
    constructor(props:object){
        super(props);
        this.state={
            name:"Nguyen Minh Son",
        }
    }
  render() {
    return (
      <div>
        <p>Ho va ten: {this.state.name}</p>
      </div>
    )
  }
}
