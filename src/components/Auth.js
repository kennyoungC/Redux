import { useDispatch } from "react-redux"
import classes from "./Auth.module.css"
import { authActions } from "../store"
import { useRef } from "react"

const Auth = () => {
  const emailRefInput = useRef()
  const passwordRefInput = useRef()
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    const enteredEmail = emailRefInput.current.value
    const enteredPassword = passwordRefInput.current.value

    const enteredEmailIsValid = enteredEmail.trim().includes("@")
    const enteredPasswordIsValid = enteredPassword.trim().length > 5

    let formIsValid = false
    if (enteredEmailIsValid && enteredPasswordIsValid) formIsValid = true

    if (!formIsValid) return

    dispatch(authActions.login())
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailRefInput} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passwordRefInput} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  )
}

export default Auth
