import React, { Component } from 'react'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name
        }
    }
    render() {
        return (
            <h1>Hello {this.state.name}!</h1>
        )
    }
}

export default App