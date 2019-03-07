import React from 'react';
import TodoCard from './card';

export default class TodoList extends React.Component {
  constructor(){
    super()
    this.state = {
      limit: 5
    };

    this.onLoadMore = this.onLoadMore.bind(this)
  }

  onLoadMore(){
    this.setState({
      limit: this.state.limit + 5
    });
  }
  renderTodos() {
    const { todoList } = this.props;
    return todoList.slice(0,this.state.limit).map((todo,i)=>{
      return(
        <TodoCard
          key={i}
          title={todo.title}
          description={todo.description}
          handleDelete={this.props.handleDelete}
          index={i}
          />
      )
    });

  }

  render() {
    //
    return (
      <div>
        {this.renderTodos()}
        <a href="#" onClick={this.onLoadMore}>Load</a>
      </div>
    )
  }
/*
  render() {
    const { todoList } = this.props;
    return (
      <div>
        {
          todoList.map((todo, i) => (
          <TodoCard
            key={i}
            title={todo.title}
            description={todo.description}
            handleDelete={this.props.handleDelete}
            index={i}
            />
          )
        )}
      </div>
    );
  }
*/
}