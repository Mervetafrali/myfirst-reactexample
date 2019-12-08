import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './redux/reducers/rootReducer';
//store ekleme
//store u oluştururken reducer veriyoruz içine
//const reducer=combinedREducer({todos:{}});
//reducer direk bu şekilde de verilebilir
//tüm comp.ler redux ile bağlanıyor basitçe :)
const store = createStore(rootReducer)
//store'u ana comp bağlama

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
