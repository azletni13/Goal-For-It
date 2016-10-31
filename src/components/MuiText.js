import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './MuiTheme'

class MuiText extends Component {
  state = {
    limit: 1
  }

  handleChange = e => {
    this.props.handleChange(e.target.value)
    /*if(this.state.limit){
      this.props.addRow()
      this.setState({limit: 0})
    }*/
  }

  handleBlur = e => {
    this.props.handleSubmit(e.target.value)
  }

  render(){
    return (
      <div>
        <div>{this.props.text}</div>
        <MuiThemeProvider muiTheme={muiTheme}>

          <TextField
            hintText={this.props.hintText}
            floatingLabelText={this.props.floatingLabelText}
            value={this.props.text}
            onChange={this.handleChange}
            onBlur={this.handleSubmit}
          />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default MuiText;
