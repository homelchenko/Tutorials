import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';

import store from './store';
import Header from './components/header';
import Todos from './components/todos';
import Footer from './components/footer';

import DevTools from './devTools';

function MainImpl(){
    return (
        <section className="todoapp">
            <Header />
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