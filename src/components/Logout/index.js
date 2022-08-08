// Write your code here
import './index.css'

const Logout = Props => {
  const {logout} = Props

  return (
    <button className="button" type="button" onClick={logout}>
      Logout
    </button>
  )
}
export default Logout
