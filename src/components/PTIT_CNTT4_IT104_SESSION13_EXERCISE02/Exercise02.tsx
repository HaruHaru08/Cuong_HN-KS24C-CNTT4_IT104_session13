import { Component } from 'react'

type User={
    id:number,
    name:string,
    date:string,
    address:string,
}
export default class Exercise02 extends Component<object,User> {
    constructor(props:object){
        super(props);
        this.state={
            id:1,
            name:"Nguyen Van Son",
            date:"20/12/2023",
            address:"Thanh Xuan,Ha Noi",
        }
    }
  render() {
    return (
      <div>
        <p>Id: {this.state.id}</p>
        <p>Ten: {this.state.name}</p>
        <p>Ngay sinh: {this.state.date}</p>
        <p>Dia chi: {this.state.address}</p>
      </div>
    )
  }
}
