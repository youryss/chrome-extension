import React, { Component } from 'react';

export class BtnAction extends Component {
  render() {
    return <button className={`btn ${this.props.cssClass}`} onClick={this.props.click}>{this.props.label}</button>
  }
};

export class InputText extends Component {
  render() {
    return <input onKeyPress={this.props.onKeyPress} placeholder={this.props.placeholder} type="text" value={this.props.value} onChange={this.props.keyupHandler} />
  }
};

export class GroupInput extends Component {
  render() {
    return (
      <div className={`row params-parser-item ${this.props.display ? 'show-item' : 'hide-item'}`}>
        <div className="col-5 params-parser-item--key">
          <InputText
            value={this.props.value.key}
            onKeyPress={this.props.onKeyPress}
            keyupHandler={this.props.updateParamHandler.bind(null, this.props.keyAccess, 'key')} />
        </div>
        <div className="col-5 params-parser-item--value">
          <InputText
            value={this.props.value.value}
            onKeyPress={this.props.onKeyPress}
            keyupHandler={this.props.updateParamHandler.bind(null, this.props.keyAccess, 'value')} />
        </div>
        <div className="col-2 text-right">
          <BtnAction
            cssClass="btn-danger"
            click={this.props.deleteParamHandler.bind(null, this.props.keyAccess)}
            label="-" />
        </div>
      </div>
    );
  }
};