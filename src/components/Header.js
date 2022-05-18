import classes from "./Header.module.css"
import { authActions } from "../store"
import { useDispatch, useSelector } from "react-redux"
const Header = () => {
  const dispatch = useDispatch()

  const isAuth = useSelector((value) => value.auth.isAuthenticated)

  const logOutHandler = () => {
    dispatch(authActions.logout())
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isAuth && (
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logOutHandler}>Logout</button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Header
