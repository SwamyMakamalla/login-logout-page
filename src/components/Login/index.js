// Write your code here
import './index.css'

const Login = Props => {
  const {login} = Props

  return (
    <button className="button" type="button" onClick={login}>
      Login
    </button>
  )
}
export default Login
