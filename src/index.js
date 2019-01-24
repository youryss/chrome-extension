import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Root from './containers/Root';


window.addEventListener('DOMContentLoaded', function () {
  browser.tabs.query({ active: true, lastFocusedWindow: true }).then((tabs) => {
    var tab = tabs[0];

    ReactDOM.render(
      <BrowserRouter>
        <Root chrome={browser} tab={tab} />
      </BrowserRouter>,
      document.getElementById('root'));
  });
});