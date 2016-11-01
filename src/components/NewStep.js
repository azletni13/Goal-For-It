import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { FlatButton, Dialog, SelectField, MenuItem } from 'material-ui'

import muiTheme from '../components/MuiTheme'
import MuiText from '../components/MuiText'

const styles = {
  customWidth: {
    width: 150,
  },
};

class NewStep extends Component {

  handleSelectMilestone = (event, index, value) => {
    this.props.selectMilestone(index)
  }

  render(){
    const stepsActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => { this.props.closeAddStepsDialog() }}
      />,
      <FlatButton
        label="Next"
        primary={true}
        disabled={!this.props.stepsText}
        onTouchTap={() => { this.props.nextButtonActionsOnSteps() }}
      />,
    ]
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <Dialog
      title="Add New steps"
      actions={stepsActions}
      modal={true}
      open={!!this.props.openStepsDialog}
      >
        {this.props.stepsText.map((num, i)=>{
          return (
                  <div key={i}>
                      <MuiThemeProvider muiTheme={muiTheme}>
                        <SelectField
                          key={i}
                          floatingLabelText="Milestone"
                          value={this.props.selectedMilestoneIndex}
                          onChange={this.handleSelectMilestone}
                          autoWidth={true}
                        >
                          {this.props.newMilestones.map((m, j) => {
                            return (
                              <MenuItem value={j} primaryText={m} key={j} />
                            )
                          })}
                        </SelectField>
                      </MuiThemeProvider>

                      <MuiText
                        hintText="step"
                        floatingLabelText="step"
                        key={i}
                        text={this.props.stepsText[i]}
                        handleSubmit={this.props.addStep}
                        handleChange={function(text) { this.props.handleStepsInput(text, i, this.props.selectedMilestoneIndex) }.bind(this)}
                        />
                      </div>
                  )

                  })}

                  </Dialog>
                </MuiThemeProvider>
    )
  }
}

export default NewStep
