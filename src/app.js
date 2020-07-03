import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class A extends Component {
  constructor(props){
    super(props)
    this.state ={}
  }
  componentDidMount(){}
  render(){
    return <div>A组件</div>
  }
}

ReactDOM.render(<A></A>,document.getElementById('root'))

