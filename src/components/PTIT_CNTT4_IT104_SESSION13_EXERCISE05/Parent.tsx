import  { Component } from 'react'
import Childrens from './Childrens';

export interface Product{
    id:number,
    name:string,
    price:number,
    quantity:number
}
export default class Parent extends Component<object,Product> {
  constructor(props:object){
    super(props);
    this.state={
      id:1,
      name:"Buoi ba roi",
      price:12000,
      quantity:6,
    }
  }
  render() {
    return (
      <>
       <Childrens product={this.state}></Childrens> 
      </>
    )
  }
}
