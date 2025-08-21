import { Component } from 'react'

type Props={
    name:string,
}
export default class Children_Comp extends Component<Props,unknown> {
  render() {
    return (
      <div>
        <p>Họ và tên bên component con: {this.props.name}</p>
      </div>
    )
  }
}
