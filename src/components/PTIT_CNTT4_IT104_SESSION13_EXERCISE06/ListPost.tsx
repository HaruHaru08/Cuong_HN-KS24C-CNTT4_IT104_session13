import { Component } from 'react'
import DetailPost from './DetailPost';

export interface Article{
    id:number,
    title:string,
    content:string,
    author:string,
}
type InitialState={
    list:Article[];
}
export default class ListPost extends Component<object,InitialState> {
    constructor(props:object){
        super(props)
        this.state={
            list:[
                {
                    id:1,
                    title:"Tai sao nen hoc ReactJS",
                    content:"Hoc ReactJS de di lam",
                    author:"David"
                },
                {
                    id:2,
                    title:"Props trong ReactJS",
                    content:"Props giup truyen du lieu tu component con xuong component cha",
                    author:"Linda"
                },
                {
                    id:3,
                    title:"State trong ReactJS la gi?",
                    content:"State giup tru trang thai du lieu ben trong mot component",
                    author:"David"
                },
            ]
        }
    }
  render() {
    return (
      <div>
        <DetailPost list={this.state.list}></DetailPost>
      </div>
    )
  }
}
