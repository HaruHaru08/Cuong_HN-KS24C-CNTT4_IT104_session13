import { Component } from 'react'
import "./Bai8.css"
type Task={
    id:number,
    name:string,
    assign:string,
    status:boolean,
    create_at:string,
}
type InitialState={
    list:Task[],
}
export default class Todolist extends Component<object,InitialState> {
    constructor(props:object){
        super(props);
        this.state={
            list:[
               {
                id:1,
                name:"Thiet ke giao dien Header",
                assign:"Nguyen Van A",
                status:false,
                create_at:new Date().toISOString(),
               },
               {
                id:2,
                name:"Thiet ke giao dien Footer",
                assign:"Nguyen Van B",
                status:true,
                create_at:new Date().toISOString(),
               },
            ]
        }
    }
    formatDate=(dateString:string)=>{
        const d=new Date(dateString);
        const day=String(d.getDate()).padStart(2,"0");
        const month=String(d.getMonth()+1).padStart(2,"0");
        const year=d.getFullYear();
        const hours=String(d.getHours()).padStart(2,"0");
        const mimutes=String(d.getMinutes()).padStart(2,"0");
        const seconds=String(d.getSeconds()).padStart(2,"0");
        return `${day}/${month}/${year} ${hours}:${mimutes}:${seconds}`
    };
  render() {
    return (
      <table>
        <tr>
            <th>STT</th>
            <th>Ten cong viec</th>
            <th>Nguoi thuc hien</th>
            <th>Trang thai</th>
            <th>Thoi gian tao</th>
            <th>Chuc nang</th>
        </tr>
        {this.state.list.map((item,index)=>{
            const statusString=item.status?"Hoan Thanh":"Chua Hoan Thanh";
            const style={
                backgroundColor:item.status===false?"red":"green",
                color:item.status===false?"White":"Black",
            }
            return (
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.assign}</td>
                    <td style={style}>{statusString}</td>
                    <td>{this.formatDate(item.create_at)}</td>
                    <td><button id='btn_fix'>Sua</button> <button id='btn_delete'>Xoa</button></td>
                </tr>
            )
        })}
      </table>
    )
  }
}
