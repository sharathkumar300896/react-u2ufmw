import React from 'react';
import ReactDOM from 'react-dom';

//import App from "./App";

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Indecision',
      subtitle: 'Put your life in the Hands of a computer',
      options: props.options
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }

  componentDidMount() {
    try {
      let json = localStorage.getItem('optioins');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch {
      //Do Nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      let json = JSON.stringify(this.state.options);
      localStorage.setItem('optioins', json);
      console.log('saving data');
    }
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handlePick() {
    let options = this.state.options;
    const rendomNum = Math.floor(Math.random() * options.length);
    const option = options[rendomNum];
    alert(option);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter Valid value item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This Option already Exists';
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState(prevState => {
      return {
        options: prevState.options.filter(option => option != optionToRemove)
      };
    });
  }
  render() {
    return (
      <div>
        <Header title={this.state.title} subtitle={this.state.subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          handleDeleteOptions={this.handleDeleteOptions}
          options={this.state.options}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};
const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

const Action = props => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What Should I do?
      </button>
    </div>
  );
};

const Options = props => {
  return (
    <div>
      {!props.options.length && <p>Please Enter an Option to get Started</p>}
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.map(option => (
        <Option
          key={option}
          value={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

const Option = props => {
  return (
    <div>
      {props.value}
      <button
        onClick={e => {
          props.handleDeleteOption(props.value);
        }}
      >
        Remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: undefined
    };
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleAddOption(e) {
    e.preventDefault();
    let option = e.target.elements.option.value.trim();

    let error = this.props.handleAddOption(option);
    this.setState(() => ({ error: error }));
    if (!error) {
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
        {this.state.error != '' && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));
