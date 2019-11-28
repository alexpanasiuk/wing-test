import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

const renderApp = () =>
  ReactDOM.render(<App />, document.getElementById('root'));

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./components/App/App', renderApp);
}

renderApp();
