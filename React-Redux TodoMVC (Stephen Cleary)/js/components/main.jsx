import React from 'react';

export default function Main(){
    return (
        <section className="main">
            <input className="toggle-all"
                type="checkbox"
            />
            <label htmlFor="toggle-all">{'Mark all as complete'}</label>
            <ul className="todo-list">
                <li className="completed">
                    <div className="view">
                        <input checked
                            className="toggle"
                            type="checkbox"
                        />
                        <label>{'Taste JavaScript'}</label>
                        <button className="destroy"></button>
                    </div>
                    <input className="edit"
                        value="Create a TodoMVC template"
                    />
                </li>
                <li>
                    <div className="view">
                        <input className="toggle"
                            type="checkbox"
                        />
                        <label>{'Buy a unicorn'}</label>
                        <button className="destroy"></button>
                    </div>
                    <input className="edit"
                        value="Rule the web"
                    />
                </li>
            </ul>
        </section>        
    )
}