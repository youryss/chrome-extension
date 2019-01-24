import React, { Component } from 'react';
import ParamsSearch from './ParamsSearch';
import { GroupInput, BtnAction } from '../Common/Forms';
import { parseUrlToJson } from '../../services/params.service';
import { parseToUrl, replaceParamsFromString } from '../../services/url.service';
import './params-parser.css';

export default class ParamsParser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      params: parseUrlToJson(this.props.tab.url),
      searchParamText: '',
    };

    this.addParamHandler = this.addParamHandler.bind(this);
    this.updateParamHandler = this.updateParamHandler.bind(this);
    this.deleteParamHandler = this.deleteParamHandler.bind(this);
    this.searchParamHandler = this.searchParamHandler.bind(this);
    this.clearParamsSearchHandler = this.clearParamsSearchHandler.bind(this);
    this.createNewUrlHandler = this.createNewUrlHandler.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  addParamHandler() {
    const currentState = { ...this.state };

    currentState.params.unshift({ key: '', value: '', display: true, });
    this.setState(currentState);
  }

  updateParamHandler(obj, key, { target: { value } }) {
    const currentState = { ...this.state };

    currentState.params[obj][key] = value;
    this.setState(currentState);
  }

  deleteParamHandler(obj) {
    const currentState = { ...this.state };

    delete currentState.params.splice(obj, 1);
    this.setState(currentState);
  }

  searchParamHandler(e) {
    const text = e.target.value;
    const currentState = { ...this.state };

    currentState.searchParamText = text;
    currentState.params.map((item) => {
      Object.assign(item, {
        display: item.key.indexOf(text) >= 0 ? true : false
      })

      return item;
    });

    this.setState(currentState);
  }

  clearParamsSearchHandler() {
    const currentState = { ...this.state };
    currentState.searchParamText = '';
    currentState.params.map((item, i) => item.display = true);
    this.setState(currentState);
  }

  createNewUrlHandler() {
    const newUrl = replaceParamsFromString(this.props.tab.url, parseToUrl(this.state.params));
    this.props.chrome.tabs.update(this.props.tab.id, { url: newUrl });
    window.close();
  }

  onKeyPress(event) {
    const { key } = event;

    if (key === 'Enter') {
      this.createNewUrlHandler();
    }
  }

  render() {
    const Params = this.state.params.map((item, i) => {
      return (
        <GroupInput key={i}
          updateParamHandler={this.updateParamHandler}
          deleteParamHandler={this.deleteParamHandler}
          display={item.display}
          value={item}
          keyAccess={i}
          onKeyPress={this.onKeyPress}
        />
      )
    });

    return (
      <div>
        <ParamsSearch
          searchParamText={this.state.searchParamText}
          searchParamHandler={this.searchParamHandler}
          addParamHandler={this.addParamHandler}
          clearParamsSearchHandler={this.clearParamsSearchHandler} />

        <div className="params-parser">
          {Params}
        </div>
        <BtnAction click={this.createNewUrlHandler} cssClass="btn btn-action btn-primary stick-footer" label='Reload' />
      </div>

    );
  }
}