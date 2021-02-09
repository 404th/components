import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

function Form () {
  return (
    <div className={ "container" }>
      <div className={ "forms-container" }>
        <div className={ "signin-signup" }>
          <form className={ "sign-in-form" }>
            <h2 className={ "title" }>Sign in</h2>
            <div className={ "input-field" }>
              <FontAwesomeIcon icon={[ "fas", "user" ]} />
              <input type="text" placeholder="Username" />
            </div>
            <div className={ "input-field" }>
              <i className={ "fas fa-lock" }></i>
              <FontAwesomeIcon icon={["fas", "lock"]} />
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className={"btn solid"} />
            <p className={"social-text"}> Or sign in with social platforms </p>
            <p className={"social-media"}>
              <a href="#" className={"social-icon"}>
                <FontAwesomeIcon icon={['fab', 'facebook']} />
              </a>
              <a href="#" className={"social-icon"}>
                <FontAwesomeIcon icon={['fab', 'google']} />
              </a>
              <a href="#" className={"social-icon"}>
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </a>
              <a href="#" className={"social-icon"}>
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </a>
              <a href="#" className={"social-icon"}>
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </a>
            </p>
          </form>
        </div>
      </div>
      <div className={ "panels-container" }></div>
    </div>
  )
}

export default Form