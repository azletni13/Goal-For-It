import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from "react-router"
import { fetchGroup, fetchNotifs, addNotif, fetchTagUser } from "../actions/groupActions"
import { fetchUser } from "../actions/userActions"
import { fetchGoal } from "../actions/goalActions"
import { openPotDialog, closePotDialog, handleMoneyInput, addGroupMoney, fetchUserMoney, fetchGroupMoney } from "../actions/moneyActions"
import { RaisedButton, FlatButton, Dialog, AppBar, List, IconMenu, MenuItem, IconButton } from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


import MuiText from '../components/MuiText'
import muiTheme from '../components/MuiTheme'
import NotificationList from '../components/NotificationList'
import GroupList from '../components/GroupList'
import MoneyStatus from '../components/MoneyStatus'
import InputBox from '../components/InputBox'
import Nav from './Nav'
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();



class Group_page extends Component {


  componentWillMount() {
    this.props.fetchGroup();
    this.props.fetchNotifs();
    this.props.fetchUser(1)
    this.props.fetchUserMoney();
    this.props.fetchGroupMoney();

  }

   handleSave = text => {

    const receiver = (this.props.tag[0] ? this.props.tag[0].user_id : null)
    this.props.addNotif({sender_id: "amna", type: "message", content: text, receiver_id: receiver})
  }

  handleTag = text => {
    this.props.fetchTagUser(text)
  }

  handleTouchTap() {
    alert('You clicked the Chip.');
  }

  render() {

    return (
      <div className="group">

        <Nav title={this.props.group[0].name }/>

        <MoneyStatus money={this.props.money}/>

        <MuiThemeProvider>
            <GroupList group={this.props.group} click={this.handleTouchTap} fetchGoal={this.props.fetchGoal}/>
        </MuiThemeProvider>

        <MuiThemeProvider>
          <List style={{color: 'white'}}>
            <NotificationList className="list-group" notifs={this.props.notifs} sender={this.props.user.user}/>
          </List>
        </MuiThemeProvider>
        <InputBox newTodo
              onSave={this.handleSave}
              onTag={this.handleTag}
              taggedUser={this.props.tag}
              label="notif"
              placeholder="What would you like to say to the group?"
             />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  user: store.user,
  group: store.group.group,
  notifs: store.group.notifs,
  tag: store.group.tag,
  groupMoney: store.money.groupMoney,
  money: store.money
  });

const mapDispatchToProps = (dispatch) => {
  //whenver addGoal is called, the result should be passed
  //to all of reducers
  return bindActionCreators({
    addNotif,
    fetchNotifs,
    fetchGroup,
    fetchUser,
    fetchTagUser,
    fetchGoal,
    fetchGroupMoney,
    fetchUserMoney,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Group_page);