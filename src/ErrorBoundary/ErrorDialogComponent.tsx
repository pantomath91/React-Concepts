import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

interface Props {
  title: any;
  body: string;
  buttonLabel: [string, string, string, string];
  buttonType: [string, string, string, string];
  modal: boolean;
  autoScrollBodyContent: boolean;
  customContentStyle: any;
  onClick: any;
  closeOnClick: boolean;
}
interface State {
  open: boolean;
  actions: [any];
}

export default class ErrorDialogComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { open: true, actions: [''] };
  }
  
  handleClose = () => {

    if (this.props.closeOnClick) {
      this.setState({ open: false });
    }
    
  }

  render() {

    this.props.buttonType.map((item: any, i: any) => {
      
      if (item === 'default') {
        this.state.actions.push(
          [<FlatButton key="" label={this.props.buttonLabel[i]} onClick={this.props.onClick} onClickCapture={this.handleClose}/>]);
      }
      if (item === 'primary') {
        this.state.actions.push(
          [<FlatButton key="" label={this.props.buttonLabel[i]} primary={true} onClick={this.props.onClick} onClickCapture={this.handleClose} />]);
      }
      if (item === 'secondary') {
        this.state.actions.push(
          [<FlatButton key="" label={this.props.buttonLabel[i]} secondary={true} onClick={this.props.onClick} onClickCapture={this.handleClose} />]);
      }
      if (item === 'disabled') {
        this.state.actions.push(
          [<FlatButton key="" label={this.props.buttonLabel[i]} disabled={true} onClick={this.props.onClick} onClickCapture={this.handleClose} />]);
      }
    });

    return (
      <div>
        <Dialog
          title={this.props.title}
          actions={this.state.actions}
          modal={this.props.modal}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={this.props.autoScrollBodyContent}
          contentStyle={this.props.customContentStyle}
        >
          {<p>{this.props.body}</p>}
        </Dialog>
      </div>
    );
  }

}