import React, { Component } from 'react'
import './App.css'

class App extends Component {
    state = {users: []}

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }))
    }

    render() {
        return (
            <div className="app">
                <h1>Users:</h1>
                {this.state.users.map(user =>
                   <div key={user.id}>{user.username}</div>
                )}
                <button>This is a button</button>
                <input defaultValue="Here is an input" />
            </div>
        )
    }
}

export default App