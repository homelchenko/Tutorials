import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';

import store from './store';
import TodoActions from './actions/todoActions';
import Todos from './components/todos';
import Footer from './components/footer';

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
            <Footer />
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