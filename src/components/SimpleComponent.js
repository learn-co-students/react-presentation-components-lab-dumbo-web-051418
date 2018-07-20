// Code SimpleComponentHere Here
import React, {Component} from 'react'

export default class SimpleComponent extends Component {
  state = {
    mood: "happy"
  }

  moodChanger = () => {
    this.setState({mood: "sad"})
  }

  render() {
    return <div onClick={this.moodChanger}>{this.state.mood}</div>
  }
}
