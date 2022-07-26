import * as React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

interface State  { error: string; }
  interface Props {}

export default class TestErrorComponent extends React.Component <Props, State> {
    constructor(props: Props) {
        super(props);
       
      }
    
      componentWillUpdate() {
        throw new Error ('An Error Occured!');
      }
    generateError = () => {
       this.setState({
        error: 'Error generated!'
       });
      }

    render() {

        return ( 
        <div>
                <MuiThemeProvider> 
                <RaisedButton
                    key="" 
                    label="Click Me"
                    primary={true} 
                    onClick={this.generateError}
                /></MuiThemeProvider>

        </div>
         );
    }
}