import Signin from "./Signin";

function AuthWrapper(props) {
  let isLoggedIn = false

  if(!isLoggedIn) {
    return (
      <Signin />
    )
  }

  return props.children;
}

export default AuthWrapper;