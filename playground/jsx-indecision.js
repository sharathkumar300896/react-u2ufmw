const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the Hands of a computer',
  options: []
};

let onFormSubmit = e => {
  e.preventDefault();
  let option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

let onRemoveAll = () => {
  app.options = [];
  render();
};

let onMakeSubmit = () => {
  const rendomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[rendomNum];
  alert(option);
};

let render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length ? 'Here are your Options' : 'No Options'}</p>
      <button disabled={app.options.length <= 0} onClick={onMakeSubmit}>
        What Should I do?
      </button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {app.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, document.getElementById('root'));
};

render();
