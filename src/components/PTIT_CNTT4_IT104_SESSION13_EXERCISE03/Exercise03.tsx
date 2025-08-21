import { Component } from 'react'

type Users={
    id:number,
    name:string,
    age:number,
}
type User={
    user:Users[],
}
export default class Exercise03 extends Component<object,User> {
    constructor(props:object){
        super(props);
        this.state={
            user:[
                {
                    id:1,
                    name:"John",
                    age:30,
                },
                {
                    id:2,
                    name:"Mary",
                    age:25,
                },
                {
                    id:3,
                    name:"Jane",
                    age:20,
                }
            ]
        }
    }
  render() {
    return (
      <table border={1} cellPadding={5} cellSpacing={0}>
        {this.state.user.map((item,index)=>
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
            </tr>
        )}
      </table>
    )
  }
}
