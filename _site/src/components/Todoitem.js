import React, { Component } from 'react';

class Todoitem extends Component {

    render() {

        return (
            <li className="Todo">
                <strong>{this.props.todo.title}</strong>


            </li>
        );
    }
}

export default Todoitem;
