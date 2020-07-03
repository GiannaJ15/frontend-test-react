import React from 'react';
import { Todo } from './Todo';
import Todo2 from './Todo2';

export class TodoList extends React.Component {

    state = {
        todos: []
    };

    //addToDo function (add to a list) using copy(...) of todos array
    //taking current state of todos, keeping values and adding new todos to the end of list
    addTodo = (todo) => {
        this.setState({
            todos: [todo,...this.state.todos]
        });
    };

    // 
    toggleComplete = (id) => {
    this.state({
    todos: this.state.todos.map( todo => {
        if(todo.id === id) {
            return{
                ...todo,
                complete: !todo.complete
            };

        } else {
            return todo;
        }
    })
})

    }


    // passing addTodo ass a prop // passing toggle complete prop
    render() {
        return ( 
        <div>
            <Todo onSubmit={this.addTodo} />
            {this.state.todos.map(todo => (
            <Todo2 
            key={todo.id} 
            toggleComplete={() => this.toggleComplete(todo.id)}
             todo={todo}
             />   
            ))}
        </div>
        );
    }
}