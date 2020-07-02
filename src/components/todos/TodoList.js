import React from 'react';
import { Todo } from './Todo';

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




    // passing addTodo ass a prop
    render() {
        return ( 
        <div>
            <Todo onSubmit={this.addTodo} />
            {JSON.stringify(this.state.todos)}
        </div>
        );
    }
}
