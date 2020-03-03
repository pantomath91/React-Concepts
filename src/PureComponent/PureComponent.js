// Component does not implement shouldComponentUpdate method that means if we click on the button below the components
// will render again and again. Put if we extends Pure Component here instead of Component then it will render only once access
// PureComponent have shouldComponentUpdate method by default.

class Forms extends Component {
  constructor() {
    super();
    this.state = { data: 10 };
  }

  render() {
    console.warn(this.state);
    return (
      <div>
        <div>
          <h1>Pure Component {this.state.data}</h1>
          <button
            onClick={() => {
              this.setState({ data: 20 });
            }}
          ></button>
        </div>
      </div>
    );
  }
}

export default Forms;
