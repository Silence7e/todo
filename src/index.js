import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import todoApp from './reducers';
import App from './components/App';

const store = createStore(todoApp);

console.log(store.getState());
let root = document.getElementById('root');
if (!root) {
  root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);
}
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider >,
  root
);