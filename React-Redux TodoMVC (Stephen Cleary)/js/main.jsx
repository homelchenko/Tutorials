import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';

import store from './store';
import TodoActions from './actions/todoActions';
import Todos from './components/todos';

import DevTools from './devTools';

function MainImpl({dispatch}){
    return (
        <section className="todoapp">
            <header className="header">
                <h1>{'todos'}</h1>
                <input autodFocus
                    className="new-todo"
                    onBlur={e => dispatch(TodoActions.add(e.target.value))}
                    placeholder="What needs to be done?"
                />
            </header>
            <Todos />
            {/*<!-- This footer should hidden by default and shown when there are todos -->*/}
            <footer className="footer">
                {/*<!-- This should be `0 items left` by default -->*/}
                <span className="todo-count"><strong>{'0'}</strong>{' item left'}</span>
                {/*<!-- Remove this if you don't implement routing -->*/}
                <ul className="filters">
                    <li>
                        <a className="selected"
                            href="#/"
                        >{'All'}</a>
                    </li>
                    <li>
                        <a href="#/active">{'Active'}</a>
                    </li>
                    <li>
                        <a href="#/completed">{'Completed'}</a>
                    </li>
                </ul>
                {/*<!-- Hidden if no completed items are left ↓ -->*/}
                <button className="clear-completed">{'Clear completed'}</button>
            </footer>
        </section>
    );
}

const Main = connect()(MainImpl);

window.onload = () => {
    const root =(
        <Provider store={store}>
            <div>
                <Main/>
                <DevTools />
            </div>
        </Provider>
    );
    
    render(
        root,
        document.getElementById('app'));    
}