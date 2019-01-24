import React, { PureComponent } from 'react';
import '../styles/app.css';
import ParamsParser from '../components/ParamsParser';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class App extends PureComponent {
  render() {
    const { tab, chrome } = this.props;
    return (
      <Router>
        <div className="App">
          <ul className="tabs">
            <li className="tab active col-12">
              <Link to="/">Params Parser</Link>
            </li>
          </ul>
          <div>
            <Route path="/" render={() => {
              return <ParamsParser chrome={chrome} tab={tab} />
            }} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
