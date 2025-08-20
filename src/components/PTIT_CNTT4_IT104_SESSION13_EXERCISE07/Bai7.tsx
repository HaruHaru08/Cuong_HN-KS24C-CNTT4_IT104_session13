import { Component } from 'react'

type status={
    theme:string,
    language:string,
}
export default class Bai7 extends Component<object,status> {
    constructor(props:object){
        super(props);
        this.state={
            // theme:"light",
            // language:"English",
            theme:"dark",
            language:"Vietnamese",
        }
    }
  render() {
    const {theme,language}=this.state;
    const style={
        backgroundColor:theme==="light"?"white":"black",
        color:theme==="light"?"black":"white",
        margin:"0px",
        padding:"0px",
        height:"100vh",
    }
    return (
      <div style={style}>
        <p>Nen: {theme}</p>
        <p>Ngon Ngu: {language}</p>
      </div>
    )
  }
}
