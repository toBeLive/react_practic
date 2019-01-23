import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    /* возможно заменить, но пока не входит в стандарт
    onLabelClick = () => {
        console.log(`done: ${this.props.label}`);
    };
    */
    constructor () {
        super();

        this.state = {
            done:      false,
            important: false,
        };

        this.onLabelClick = () => {
            this.setState(({ done }) => {
                return {
                    done: !done,
                };
            });
            console.log(`label: ${this.props.label}`);
        };

        this.onMarkImportant = () => {
            this.setState(({ important }) => {
                return {
                    important: !important,
                };
            });
            console.log(`important: ${this.props.important}`);
        };
    }

    render () {

        const { label, onDelete } = this.props;
        const { done, important } = this.state;

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
                    onClick = { this.onLabelClick }>
                    {label}
                </span>

                <button
                    className = 'btn btn-outline-success btn-sm float-right'
                    type = 'button'
                    onClick = { this.onMarkImportant }>
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
