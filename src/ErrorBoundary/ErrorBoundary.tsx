import * as React from 'react';
import Dialog from './ErrorDialogComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

interface State {
  hasError: boolean;
  errorDescription: string;
  open: boolean;
}
interface Props {
  errorText: string;
  errorTitle: string;
  headerColor: string;
  buttonLabel: [string, string, string, string];
  buttonType: [string, string, string, string];
  modal: boolean;
  autoScrollBodyContent: boolean;
  customContentStyle: any;
  onClick: any;
  closeOnClick: boolean;
}

export default class ErrorBoundary extends React.Component<Props, State> {

  style = {
    backgroundColor: this.props.headerColor,
  };

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, errorDescription: '', open: false };
  }

  componentDidCatch(error: any, info: any) {
    this.setState({ hasError: true, errorDescription: error, open: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={this.style}>
          <MuiThemeProvider>
            <Dialog title={<div style={this.style}>{this.props.errorTitle}</div>} body={this.props.errorText} buttonType={this.props.buttonType} buttonLabel={this.props.buttonLabel} onClick={this.props.onClick} closeOnClick={this.props.closeOnClick} modal={this.props.modal} autoScrollBodyContent={this.props.autoScrollBodyContent} customContentStyle={this.props.customContentStyle} />
          </MuiThemeProvider>
        </div>);
    } else {
      return this.props.children;

    }
  }
}