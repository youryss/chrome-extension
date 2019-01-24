import React, { Component } from 'react';
import { InputText, BtnAction } from '../Common/Forms';
import '../../styles/params-search.css';

export default class ParamsSearch extends Component {
  render() {
    return (
      <div className="params-search row">
        <div className="col-11">
          <InputText placeholder={'Params Search'} value={this.props.searchParamText} keyupHandler={this.props.searchParamHandler} />
          <BtnAction cssClass={`btn-default btn-remove-param ${this.props.searchParamText ? `show-item` : `hide-item`}`}
            label="x" click={this.props.clearParamsSearchHandler} />
        </div>
        <div className="col-1 text-right">
          <BtnAction
            cssClass="btn-primary"
            label="+"
            click={this.props.addParamHandler} />
        </div>
      </div>
    );
  }
};