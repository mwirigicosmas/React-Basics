import React, { Component } from 'react';
import Todoitem from "./Todoitem";

class Todos extends Component {


    render() {
        let todoItems;
        if(this.props.todos){
            todoItems = this.props.todos.map(todo => {
                //console.log(project);
                return(
                    <Todoitem key={todo.title} todo={todo}/>

                )



            });


        }
        //console.log(this.props);
        return (
            <div className="Todos">
                <h3> Todo list</h3>
                {todoItems}
            </div>
        );
    }
}


export default Todos;
