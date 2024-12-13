import {useState} from "react";

export default function LoginState() {
    const [formData, setFormData] = useState({email: "", password: ""});
    const [isSelected, setIsSelected] = useState({email: null, password: null});
    let emailIsInvalid, passwordIsInvalid

    if(isSelected.email === false) {
        if(formData.email.trim() === "") emailIsInvalid = true;
        if(!formData.email.includes("@")) emailIsInvalid = true;
    }

    if(isSelected.password === false) {
        if(formData.password.trim() === "") passwordIsInvalid = true;
        if(formData.password.length < 8) passwordIsInvalid = true;
    }

    function handleChange(identifier, value) {
        setFormData(prevData => ({
            ...prevData,
            [identifier]: value
        }))
    }

    function changeSelectedState(identifier, value) {
        setIsSelected(prevValues => ({
            ...prevValues,
            [identifier]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log(formData);
    }

    return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
          <div className="control no-margin">
              <label htmlFor="email">Email</label>
              <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onFocus={() => changeSelectedState("email", true)}
                  onBlur={() => changeSelectedState("email", false)}
              />
              <div className="control-error">
                  {emailIsInvalid && <p>Please enter a valid email address.</p>}
              </div>
          </div>

          <div className="control no-margin">
              <label htmlFor="password">Password</label>
              <input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  onFocus={() => changeSelectedState("password", true)}
                  onBlur={() => changeSelectedState("password", false)}
              />
              <div className="control-error">
                  {passwordIsInvalid && <p>Please enter a valid password.</p>}
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
