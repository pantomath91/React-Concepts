import * as React from 'react';
import './App.css';
import TestErrorComponent from './components/TestErrorComponent';
import ErrorBoundary from './components/ErrorBoundary';

const logo = require('./logo.svg');

class App extends React.Component {

  style = {
    width: '100%',
    maxWidth: 'none',
    };

    handleClick = () => {
      alert('you clicked me!');
    } 
    
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <ErrorBoundary headerColor="lightseagreen" errorTitle="Error Boundary" errorText="Ooops! Something went wrong!" buttonType={['default', 'primary', 'secondary', 'disabled']} buttonLabel={['Ok', 'Continue', 'Close', 'Cancel']} onClick={this.handleClick} closeOnClick={true} modal={false} autoScrollBodyContent={false} customContentStyle={null}>
          <TestErrorComponent />
        </ErrorBoundary>
        </p>   

      </div>
    );
  }
}

export default App;
