import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    /* возможно заменить, но пока не входит в стандарт
    onLabelClick = () => {
        console.log(`done: ${this.props.label}`);
    };
    */

    render () {

        const { onDelete, onToggleDone, onToggleImportant, label, important, done } = this.props;

        let classNames = 'todo-list-item';

        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }

        return (
            <span className = { classNames }>
                <span
                    className = 'todo-list-item-label'
                    onClick = { onToggleDone }>
                    {label}
                </span>

                <button
                    className = 'btn btn-outline-success btn-sm float-right'
                    type = 'button'
                    onClick = { onToggleImportant }>
                    <i className = 'fa fa-exclamation' />
                </button>

                <button
                    className = 'btn btn-outline-danger btn-sm float-right'
                    type = 'button'
                    onClick = { onDelete }>
                    <i className = 'fa fa-trash-o' />
                </button>
            </span>
        );
    }
}
