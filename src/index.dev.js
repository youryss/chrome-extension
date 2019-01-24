import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Root from './containers/Root';

const tab = {
  url: 'http://localhost:1234/?age=81&clientID=463558&ct=MP&countryID=US&curr=EUR&elID=311517499513269&ln=en&pickupCountryCode=US&pickupDateTime=2018-04-09T10%3A00&residenceID=IE&returnCountryCode=US&returnDateTime=2018-05-24T10%3A00&pickupID=3716&pickupName=Los%20Angeles%20-%20Airport%20(California)&returnID=3716&returnName=Los%20Angeles%20-%20Airport%20(California)#/vehicles',
  id: '1'
};

const chrome = {
  tabs: {
    update: () => { }
  }
};

ReactDOM.render(
  <BrowserRouter>
    <Root chrome={chrome} tab={tab} />
  </BrowserRouter>,
  document.getElementById('root'));

