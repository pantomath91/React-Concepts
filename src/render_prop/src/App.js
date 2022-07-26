import { Component } from 'react';
import './App.css';
import ClickCounterTwo from './components/ClickCounterTwo';
import Counter from './components/Counter';
import HoverCounterTwo from './components/HoverCounterTwo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter render={(count, incrementCount) => (<ClickCounterTwo count={count} incrementCount={incrementCount} />)} />
        <Counter render={(count, incrementCount) => (<HoverCounterTwo count={count} incrementCount={incrementCount} />)} />
      </div>);
  }
}
export default App;
