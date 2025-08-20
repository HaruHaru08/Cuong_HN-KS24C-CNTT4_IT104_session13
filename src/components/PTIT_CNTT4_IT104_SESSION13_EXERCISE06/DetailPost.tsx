import { Component } from 'react'
import type { Article } from './ListPost';

type Props={
    list:Article[],
}
export default class DetailPost extends Component<Props,unknown> {
  render() {
    return (
      <>
        {this.props.list.map((item,index)=> 
            <div key={index}>
                <p>Id: {item.id}</p>
                <p>Title: {item.title}</p>
                <p>Content: {item.content}</p>
                <p>Author: {item.author}</p>
                <hr />
            </div>
        )}
      </>
    )
  }
}
