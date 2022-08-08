// Write your code here
import './index.css'

const Message = Props => {
  const {isLoggedIn} = Props

  const message = isLoggedIn ? 'Welcome User' : 'Please Login'

  return <h1 className="heading">{message}</h1>
}
export default Message
