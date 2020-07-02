
import { TodoList } from './components/todos';
import { todos } from './data/todos';
import React,{Component} from 'react';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      newItem:"",
      list:[]
    }
  }
// update input function
updateInput(key, value){
  this.setState({
    [key]: value
  });
}
// creating addItem function that will add new items to list
addItem(){
  const newItem={
    id: 1 + Math.random(),
    value: this.state.newItem.slice()
  };

  const list =[...this.state.list];

  list.push(newItem);

  //update with new list and reset new item input
  this.setState({
    list,
    newItem:""
  });
}

deleteItem(id){
  const list = [...this.state.list];

  //filter
  const updatedList = list.filter(item => item.id !== id);

  this.setState({list: updatedList});
}

  render() {
    return(
    <div className="App">

<div
            className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans"
        >
            <div
                className="bg-white rounded shadow p-6 m-4 w-full lg:w-2/5"
            >
                <div
                    className="mb-4"
                >
                    <h1
                        className="text-gray-darkest text-3xl font-bold"
                    >
                        Todo List
                    </h1>
                    <div
                        className="flex my-8"
                    >
                        {/*adding value and onchange*/}
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-darker"
                            placeholder="Add Todo"
                            value={this.state.newItem}
                            onChange={e => this.updateInput("newItem", e.target.value)}
                        />
                        <button
                            className="flex-no-shrink p-2 border-2 rounded text-teal-700 border-teal-700 hover:text-white hover:bg-teal-700"
                            onClick={() => this.addItem()}
                        >
                            Add
                        </button>
                    </div>
                </div>
                <div>
                    <div
                        className="flex mb-4 items-center justify-between"
                    >
                        <div>
                            <div
                                className="flex-grow text-gray-darkest"
                            >
                                Create a PR against `master` branch
                            </div>
                        </div>
                        <div>
                            <button
                                className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-700 border-green-700 hover:bg-green-700"
                            >
                                Done
                            </button>
                            <button
                                className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700"
                            >
                                Remove
                            </button>
                            
                             <br/>
                            
                            <ul  className="flex-grow text-gray-darkest ">
                                {this.state.list.map(item => {
                                  return(
                                    <li key={item.id}>
                                      {item.value}
                            <button
                                className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700"
                           onClick={() => this.deleteItem(item.id)}
                           >
                             Remove
                              </button>
                                    </li>
                                  )
                                })}
                              </ul>
                               
                            
                        </div>
                    </div>
                    <div
                        className="flex mb-4 items-center justify-between"
                    >
                        <div>
                            <div
                                className="flex-grow"
                            >
                                Email for review
                            </div>
                        </div>
                        <div>
                            <button
                                className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-500 border-gray-500 hover:bg-gray-500"
                            >
                                Not Done
                            </button>
                            <button
                                className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      <TodoList  todos={todos} />
    </div>
  );
}
}
export default App;
