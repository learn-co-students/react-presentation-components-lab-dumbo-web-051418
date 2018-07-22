// Code SimpleComponentHere Here
import React from 'react'

export default class SimpleComponent extends React.Component {
  state = {
    mood: 'happy'
  }

  toggleMoods = () => this.state.mood === 'happy' ? this.setState({mood: 'sad'}) : this.setState({mood: 'happy'})

  render() {
    return (
      <div onClick={this.toggleMoods}>
        {this.state.mood}
      </div>
    )
  }

}
