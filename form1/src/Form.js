import { useState } from 'react'
import "./FormStyle.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, fas)
///////////////////////////////////


function Form () {
  
  const [ containerClasses, setContainerClasses ] = useState("container")
  
  function sign_in_btn(){
    setContainerClasses("container")
  }
  function sign_up_btn(){
    setContainerClasses("container sign-up-mode")
  }

  return (
    <div className={ containerClasses }>
      <div className={ "forms-container" }>
        <div className={ "signin-signup" }>
          <form className={ "sign-in-form" }>
            <h2 className={ "title" }>Sign in</h2>
            <div className={ "input-field" }>
              <FontAwesomeIcon icon={[ "fas", "user" ]} />
              <input type="text" placeholder="Username" />
            </div>
            <div className={ "input-field" }>
              <FontAwesomeIcon icon={["fas", "lock"]} />
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Sign in" className={"btn solid"} />
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
          <form className={ "sign-up-form" }>
            <h2 className={ "title" }>Sign up</h2>
            <div className={ "input-field" }>
              <FontAwesomeIcon icon={[ "fas", "user" ]} />
              <input type="text" placeholder="Username" />
            </div>
            <div className={ "input-field" }>
              <FontAwesomeIcon icon={[ "fas", "envelope" ]} />
              <input type="text" placeholder="Email" />
            </div>
            <div className={ "input-field" }>
              <FontAwesomeIcon icon={["fas", "lock"]} />
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Sign up" className={"btn solid"} />
            <p className={"social-text"}> Or sign up with social platforms </p>
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
      <div className={ "panels-container" }>
        <div className={ "panel left-panel" }>
          <div className={ "content" }>
            <h3>New here?</h3>
            <p>Hello world! I'm here! Please, keep calm!</p>
            <button className={"btn transparent"} id={"sign-up-btn"} onClick={ () => sign_up_btn() }>Sign up</button>
          </div>
          <img className={"image"} src="./photos/login.svg" alt="Login image" />
        </div>

        <div className={ "panel right-panel" }>
          <div className={ "content" }>
            <h3>One of us?</h3>
            <p>Hello world! I'm here! Please, keep calm!</p>
            <button className={"btn transparent"} id={"sign-in-btn"} onClick={ () => sign_in_btn() }>Sign in</button>
          </div>
          <img className={"image"} src="./photos/signup.svg" alt="Sign up image" />
        </div>
      </div>
    </div>
  )
}

export default Form