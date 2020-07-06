import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class AA extends Component {
  constructor(props){
    super(props)
    this.state ={}
  }
  componentDidMount(){}
  render(){
    return <div>A组件</div>
  }
}

ReactDOM.render(<AA></AA>,document.getElementById('root'));

