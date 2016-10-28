import axios from "axios"

//use Promise middleware
export function fetchGoal(goal) {
  const url = `http://localhost:8080/api/goals/${goal}`;
  const request = axios.get(url);
  return {
    type: "FETCH_GOAL",
    payload: request
  };
}



export function addGoal(goal) {
  const url = "http://localhost:8080/api/goals"
  let data = {goal}
  axios.post(url, data)
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
    }
  }
}

export function deleteGoal(id) {
  return { type: 'DELETE_GOAL', payload: id}
}


export function checkedGoal(id, checked) {
  const url = `http://localhost:8080/api/goals/${id}`
  let isChecked = {checked: !checked}
  axios.put(url, isChecked)
  return {
    type: 'COMPLETE_GOAL',
    payload: !checked
  }
}

export function checkedMile(milestone, index) {
  const url = `http://localhost:8080/api/mile/${milestone.id}`
  let isChecked = {checked: !milestone.checked}
  axios.put(url, isChecked)
  return {
    type: 'COMPLETE_MILE',
    payload: index
  }
}

export function checkedStep(step, index) {
  const url = `http://localhost:8080/api/step/${step.id}`
  let isChecked = {checked: !step.checked}
  axios.put(url, isChecked)
  return {
    type: 'COMPLETE_STEP',
    payload: {step, index}
  }
}

