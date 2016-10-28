import axios from "axios"

//usual way for ajex calls
// export function fetchGoal() {
//   return function(dispatch) {
//       axios.get("http://localhost:8080/api/goal")
//       .then((response) => {
//         //todo: refactor
//         console.log("big chunk from server", [response.data][0])
//         dispatch({type: "FETCH_GOALS_FULFILLED",
//                   payload: {
//                     goal: [response.data][0][0].goal,
//                   }
//                 })
//       })
//       .catch((err) => {
//         dispatch({type: "FETCH_GOALS_REJECTED", payload: err})
//       })
//   }
// }


//use Promise middleware
export function fetchGoal() {
  const url = "http://localhost:8080/api/goals/2";
  const request = axios.get(url);
  return {
    type: "FETCH_GOALS",
    payload: request
  };
}



export function addGoal(goal) {
  const url = "http://localhost:8080/api/goals"
  let data = {goal}
  let request = axios.post(url, data)
  return {
    type: 'ADD_GOAL',
    payload: {
      goal
    }
  }
}


export function updateGoal(id, text) {
  return {
    type: 'UPDATE_GOAL',
    payload: {
      id,
      text,
    },
  }
}

export function deleteGoal(id) {
  return { type: 'DELETE_GOAL', payload: id}
}

export function openAddGoalDialog() {
  return {
    type: 'OPEN_ADD_GOAL_DIALOG',
  };
}

export function closeAddGoalDialog() {
  return {
    type: 'CLOSE_ADD_GOAL_DIALOG',
  };
}

export function activateNextButton() {
  return {
    type: 'ACTIVATE_NEXT_BUTTON',
  };
}

export function handleGoalInput(text) {
  return {
    type: 'HANDLE_GOAL_INPUT',
    payload: text
  };
}
