import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Header from './components/header';
import Todos from './components/todos';
import Footer from './components/footer';

import DevTools from './devTools';

export default function TodoApp(){
    return (
        <section className="todoapp">
            <Header />
            <Todos />
            <Footer />
        </section>
    );
}

window.onload = () => {
    const root =(
        <Provider store={store}>
            <div>
                <TodoApp/>
                <DevTools />
            </div>
        </Provider>
    );
    
    render(
        root,
        document.getElementById('app'));    
}