/*
let visiblityType = false;

let onToggle = () => {
  visiblityType = !visiblityType;
  render();
};

let render = () => {
  let template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onToggle}>
        {!visiblityType ? 'Show Details' : 'Hide Details'}
      </button>
      {visiblityType && <p>This is the Information that I needed to Show!!</p>}
    </div>
  );
  ReactDOM.render(template, document.getElementById('root'));
};

render();
*/
/*
class VisiblityToggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isvisible: false
    };
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle() {
    this.setState(prevState => {
      return {
        isvisible: !prevState.isvisible
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visiblity Toggle</h1>
        <button onClick={this.onToggle}>
          {this.state.isvisible ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.isvisible && (
          <p>This is a piece of Information that I needed to Show you!!!</p>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisiblityToggle />, document.getElementById('root'));*/
