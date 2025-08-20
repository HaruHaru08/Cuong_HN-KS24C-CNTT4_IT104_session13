import { Component } from 'react'
import type { Product } from './Parent';

interface Props{
    product:Product,
}
export default class Childrens extends Component<Props,unknown> {
  render() {
    const {id,name,price,quantity}=this.props.product;
    return (
      <div>
        <p>id: {id}</p>
        <p>Product name: {name}</p>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
      </div>
    )
  }
}
