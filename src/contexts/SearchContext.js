// import React, { Component, createContext } from 'react';

// const SearchContext = createContext({
//   shows: [],
//   characters: []
// });

// class SearchProvider extends Component {
//   static defaultProps = {
//     shows: [],
//     characters: []
//   };
//   state = {
//     shows: this.props.store
//   };

//   addTodo = newTodo => {
//     const { todos } = this.state;

//     this.setState({
//       todos: [...todos, createTodo(newTodo)]
//     });
//   };

//   checkTodo = id => {
//     this.setState({
//       todos: this.state.todos.map(todo => {
//         if (todo.id === id) {
//           todo.completed = !todo.completed;
//         }
//         return todo;
//       })
//     });
//   };

//   deleteTodo = id => {
//     this.setState({
//       todos: this.state.todos.filter(todo => todo.id !== id)
//     });
//   };

//   componentDidMount() {
//     getTodos().then(todos => this.setState({ todos }));
//   }

//   render() {
//     const { addTodo, checkTodo, deleteTodo } = this;
//     const { todos } = this.state;

//     return (
//       <TodoContext.Provider
//         value={{
//           todos,
//           addTodo,
//           checkTodo,
//           deleteTodo
//         }}
//       >
//         {this.props.children}
//       </TodoContext.Provider>
//     );
//   }
// }

// export default SearchProvider;
