import { createStore } from "redux"

const initialState = {
  counter: 0,
  showCounter: true,
}

const counterReducerr = (state = initialState, action) => {
  if (action.type === "increament") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    }
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.value,
      showCounter: state.showCounter,
    }
  }
  if (action.type === "decreament") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    }
  }
  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    }
  }
  return state
}

const store = createStore(counterReducerr)

export default store
