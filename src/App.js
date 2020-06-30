import React, { Component } from 'react';
import { TodoList } from './components/todos';
import { todos } from './data/todos';

class App extends Component {
  // Creating a constructor that will have props and super
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[]
    }
  }

  // Create new Item to todo list

  updateInput(key, value){
    this.setState({
      [key]: value
    });
  }
  addItem(){
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    //
    const list = [...this.state.list];
    //add item to todo list
    list.push(newItem);
    //updat and reset
    this.setState({
      list,
      newItem:""
    });




  }

render() {
  return (
    <div className="App">
      <TodoList  todos={todos} />
    </div>
  );
}
}
export default App;
