import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './app.css'
import './app.less'
class BB extends Component {
  constructor(props){
    super(props)
    this.state ={}
  }
  componentDidMount(){}
  render(){
    return <div>B组件</div>
  }
}

ReactDOM.render(<BB></BB>,document.getElementById('root'));

