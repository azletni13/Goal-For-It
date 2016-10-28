import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './MuiTheme'

class MuiText extends Component {
  state = {
    text: this.props.text || '',
    limit: 1
  }

  handleSubmit = e => {
    const text = e.target.value.trim()
    this.props.onSave(text)
    this.setState({ text: '' })

  }

  handleChange = e => {
    this.props.activateNext()
    if (this.state.limit){
      // this.props.addRow(e.target.value)
      this.setState({ limit: 0 })
    }
    this.setState({ text: e.target.value })
  }

  // handleBlur = e => {
  //   if (!this.props.newTodo) {
  //     this.props.onSave(e.target.value)
  //   }
  // }

  render(){
    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <TextField
            hintText={this.props.hintText}
            floatingLabelText={this.props.floatingLabelText}
            value={this.state.text}
            onChange={this.handleChange}
          />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default MuiText;