import React, { Component } from 'react'
import './App.css'

class App extends Component {
    state = {
        users: [],
        todos: [],
    }

    componentDidMount() {
        this.fetchUsers()
        this.fetchTodos()
    }

    fetchUsers() {
        fetch('/users', {
            method: 'GET',
            // headers: {
            //     "Content-Type": "application/json; charset=utf-8",
            // },
            // body: JSON.stringify({
            //     atest: 'testresults'
            // }),
        })
        .then(res => res.json())
        .then(users => {
            this.setState({ users })
        })
    }

    fetchTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(todos => {
            this.setState({ todos })
        })
    }

    renderUsers() {
        return (
            <div>
                {this.state.users.map(user => (
                   <div key={user.id}>{user.username}</div>
                ))}
            </div>
        )
    }

    render() {
        return (
            <div className="app">
                <h3>Users:</h3>
                {this.renderUsers()}
                
                <h3>Controls:</h3>
                <button>This is a button</button>
                <input defaultValue="Here is an input" />
            </div>
        )
    }
}

export default App