import React from 'react';
import { connect } from 'react-redux';

import TodoActions from '../actions/todoactions';

function Header({dispatch}){
    return (
        <header className="header">
            <h1>{'todos'}</h1>
            <input autodFocus
                className="new-todo"
                onBlur={e => dispatch(TodoActions.add(e.target.value))}
                placeholder="What needs to be done?"
            />
        </header>        
    )
}

export default connect()(Header);