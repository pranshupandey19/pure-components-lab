import React, { Component } from 'react'

export class SimpleCounterComponent extends Component {
  constructor(){
    super()
    this.state={
      count :0,
      toggle:true
    }
  }
  changeToggle = ()=>{
    this.setState({
      toggle : !this.state.toggle
    })
  }

  increaseCount = ()=>{
    if(this.state.toggle){
      this.setState({
        count : this.state.count + 1
      })
        
    }
    else{
      this.setState({
        count : this.state.count
      })
    }
  }
  render() {
    console.log("this is simple component")
    return (
      <div>
          <h1>
            Simple Component
          </h1>
          <h3>{this.state.count}</h3>
          <button onClick={this.changeToggle} style={{backgroundColor:`${this.state.toggle?"green":"red"}`}}>
            Toggle
          </button>
          <button onClick={this.increaseCount}> + </button>

      </div>

    )
  }
}

export default SimpleCounterComponent