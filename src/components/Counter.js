import classes from "./Counter.module.css"
import { useSelector, useDispatch } from "react-redux"
import { counterActions } from "../store"
const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter.counter)
  const show = useSelector((state) => state.counter.showCounter)
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  }

  const increamentHandler = () => {
    dispatch(counterActions.increment())
  }
  const decreamentHandler = () => {
    dispatch(counterActions.decrement())
  }
  const increase = () => {
    dispatch(counterActions.increase(10))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={increamentHandler}>increament</button>
      <button onClick={increase}>increase by 6</button>
      <button onClick={decreamentHandler}>decreament</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}
export default Counter
// class Counter extends Component {
//   increamentHandler() {
//     this.props.increament()
//   }

//   decreamentHandler() {
//     this.props.decreament()
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <button onClick={this.increamentHandler.bind(this)}>increament</button>
//         <button onClick={this.decreamentHandler.bind(this)}>decreament</button>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increament: () => dispatch({ type: "increament" }),
//     decreament: () => dispatch({ type: "decreament" }),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
