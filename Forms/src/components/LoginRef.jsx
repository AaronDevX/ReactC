import {useRef, useState} from "react";
import {emailIsValid, hasMinLength} from '../util/validation.js'

export default function LoginRef() {
    const [dataValid, setDataValid] = useState({email: true, password: true})
    const email = useRef();
    const password = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        const mailIsValid = emailIsValid(email.current.value)
        const passwordIsValid = hasMinLength(password.current.value, 8)

        if(!mailIsValid || !passwordIsValid) {
            setDataValid({email: mailIsValid, password: passwordIsValid})
            return;
        }

        setDataValid({email: true, password: true})
        console.log("Sending HTTP request...");
    }
    return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
          <div className="control no-margin">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" ref={email}/>
              <div className="control-error">
                  {!dataValid.email && <p>Please enter a valid email address.</p>}
              </div>
          </div>

          <div className="control no-margin">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" name="password" ref={password}/>
              <div className="control-error">
                  {!dataValid.password && <p>Please enter a valid password.</p>}
              </div>
          </div>
      </div>

        <p className="form-actions">
            <button className="button button-flat">Reset</button>
            <button className="button">Login</button>
      </p>
    </form>
  );
}
