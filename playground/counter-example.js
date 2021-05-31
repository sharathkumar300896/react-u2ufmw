/*
let count = 0;

const addOne = () => {
  count++;
  render();
};

const minusOne = () => {
  count--;
  render();
};

const resetAll = () => {
  count = 0;
  render();
};

let render = () => {
  const template2 = (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={resetAll}>Reset</button>
    </div>
  );
  ReactDOM.render(template2, document.getElementById('root'));
};

render();*/
/*
class CounterApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleAddOne() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinusOne() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }

  handleReset() {
    this.setState(prevState => {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<CounterApp />, document.getElementById('root'));*/
